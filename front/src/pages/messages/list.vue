<template>
	<div :style='{"padding":"0 0 20px","margin":"0px auto","color":"#666","background":"#fff","width":"1200px","fontSize":"16px","position":"relative"}'>
		<div class="section-title" :style='{"padding":"0","margin":"0 1060px 20px 0","color":"#fff","borderRadius":"0px 0px 30px 30px","textAlign":"center","background":"#5FB6B8","display":"inline-block","width":"190px","fontSize":"22px","lineHeight":"60px","height":"60px"}'>通知留言</div>
		<el-form :model="form" :rules="rules" ref="form" label-width="65px" label-position="left">
			<el-form-item label="留言" prop="content">
				<editor
					:style='{"minHeight":"250px","padding":"0","boxShadow":"none","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"1px","width":"80%","borderStyle":"solid","height":"auto"}'
					v-model="form.content" 
					class="editor" 
					action="file/upload">
				</editor>
			</el-form-item>
			<el-form-item label="图片" prop="cpicture">
				<file-upload
					tip="点击上传图片"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="form.cpicture?form.cpicture:''"
					@change="cpictureUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('form')">立即提交</el-button>
				<el-button @click="resetForm('form')">重置</el-button>
			</el-form-item>
		</el-form>
		<div class="section-content">
			<span v-for="item in infoList" :key="item.id">
				<div class="header-block">
					<el-avatar v-if="item.avatarurl" :size="50" :src="$config.baseUrl + item.avatarurl"></el-avatar>
					<el-avatar v-if="!item.avatarurl" :size="50" :src="require('@/assets/touxiang.png')"></el-avatar>
					<span class="userinfo">用户：{{item.username}}</span>
				</div>
				<div class="content-block-ask">
					<div class="ql-snow ql-editor" v-html="item.content"></div>
				</div>
				<div v-if="item.cpicture" class="content" style="margin: 0;flex: 1;">
					<img style="max-width: 300px;max-height: 300px;border: 2px solid #EEEEEE;margin:8px 0 0 50px;" :src="$config.baseUrl+item.cpicture">
				</div>
				<div class="content-block-reply" v-if="item.reply">
					回复：<div class="ql-snow ql-editor" v-html="item.reply"></div>
				</div>
				<div v-if="item.rpicture" class="content" style="margin: 0;flex: 1;">
					<img style="max-width: 300px;max-height: 300px;border: 2px solid #EEEEEE;margin:8px 0 0 50px;" :src="$config.baseUrl+item.rpicture">
				</div>
				<el-divider></el-divider>
			</span>
		</div>
		<el-pagination
			background
			id="pagination" class="pagination"
			:pager-count="7"
			:page-size="pageSize"
			:page-sizes="pageSizes"
			prev-text="<"
			next-text=">"
			:hide-on-single-page="false"
			:layout='["total","prev","pager","next","sizes","jumper"].join()'
			:total="total"
			:style='{"padding":"0","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3)","margin":"20px auto","whiteSpace":"nowrap","color":"#333","alignItems":"center","textAlign":"center","display":"flex","clear":"both","justifyContent":"center","overflow":"hidden","borderRadius":"30px","width":"100%","fontSize":"16px","fontWeight":"500","order":"50","height":"60px","maxWidth":"800px"}'
			@current-change="curChange"
			@prev-click="prevClick"
			@next-click="nextClick"
		></el-pagination>
	  
	</div>
</template>

<script>
	export default {
		//数据集合
		data() {
			return {
				layouts: '',
				form: {
					content: '',
					userid: localStorage.getItem('frontUserid'),
					username: localStorage.getItem('username')
				},
				total: 1,
				pageSize: 20,
				pageSizes: [],
				totalPage: 1,
				rules: {
					content: [
						{ required: true, message: '请输入内容', trigger: 'blur' }
					]
				},
				infoList: [],
			}
		},
		created() {
			this.getInfo(1);
		},
		//方法集合
		methods: {
			getInfo(page) {
				this.$http.get('messages/list', {params: {page, limit: this.pageSize,sort:"addtime", order:"desc"}}).then(res => {
					if (res.data.code == 0) {
						this.infoList = res.data.data.list;
						this.total = res.data.data.total;
						this.pageSize = Number(res.data.data.pageSize);
						this.totalPage = res.data.data.totalPage;
						if(this.pageSizes.length==0){
							this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
						}
					}
				});
			},
			curChange(page) {
				this.getInfo(page);
			},
			prevClick(page) {
				this.getInfo(page);
			},
			nextClick(page) {
				this.getInfo(page);
			},
			cpictureUploadChange(fileUrls) {
				this.form.cpicture = fileUrls;
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						if(this.form.cpicture!=null) {
							this.form.cpicture = this.form.cpicture.replace(new RegExp(this.$config.baseUrl,"g"),"");
						}
						this.form.avatarurl = localStorage.getItem('frontHeadportrait')?localStorage.getItem('frontHeadportrait'):'';
						this.$http.post('messages/add', this.form).then(res => {
							if (res.data.code == 0) {
								this.$message({
									type: 'success',
									message: '留言成功!',
									duration: 1500,
									onClose: () => {
										window.location.reload();
									}
								});
							}
						});
					} else {
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.section {
		width: 900px;
		margin: 0 auto;
	}

	.section-content {
		margin-top: 50px;
	}
	.section-pagination {
		margin-top: 30px;
		text-align: center;
	}
	.header-block {
		height: 50px;
		line-height: 50px;
		display: flex;
	}
	.userinfo {
		align-self: center;
		margin-left: 15px;
	}
	.content-block-ask, .content-block-reply {
		margin-left: 65px;
		margin-top: 15px;
	}
	.content-block-reply {
		margin-top: 30px;
	}
	.z-box {
		width: 100% !important;
	}
  
</style>
