<template>
	<div class="add-update-preview">
		<el-form
			class="add-update-form"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="180px"
			>
			<el-form-item class="add-item" label="车位编号" prop="cheweibianhao">
				<el-input v-model="ruleForm.cheweibianhao" 
					placeholder="车位编号" clearable :disabled=" false  ||ro.cheweibianhao"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="车位名称" prop="cheweimingcheng">
				<el-input v-model="ruleForm.cheweimingcheng" 
					placeholder="车位名称" clearable :disabled=" false  ||ro.cheweimingcheng"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="车位分类" prop="cheweifenlei">
				<el-input v-model="ruleForm.cheweifenlei" 
					placeholder="车位分类" clearable :disabled=" false  ||ro.cheweifenlei"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="发票" v-if="type!='cross' || (type=='cross' && !ro.fapiao)" prop="fapiao">
				<file-upload
					tip="点击上传发票"
					action="file/upload"
					:limit="3"
					:multiple="true"
					:fileUrls="ruleForm.fapiao?ruleForm.fapiao:''"
					@change="fapiaoUploadChange"
					></file-upload>
			</el-form-item>
			<el-form-item class="add-item" v-else label="发票" prop="fapiao">
				<img v-if="ruleForm.fapiao.substring(0,4)=='http'" class="upload-img" v-bind:key="index" :src="ruleForm.fapiao.split(',')[0]">
				<img v-else class="upload-img" v-bind:key="index" v-for="(item,index) in ruleForm.fapiao.split(',')" :src="baseUrl+item">
			</el-form-item>
			<el-form-item class="add-item" label="入场时间" prop="ruchangshijian">
				<el-date-picker
					:disabled=" false  ||ro.ruchangshijian"
					value-format="yyyy-MM-dd HH:mm:ss"
					v-model="ruleForm.ruchangshijian" 
					type="datetime"
					placeholder="入场时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item class="add-item" label="离场时间" prop="lichangshijian">
				<el-date-picker
					:disabled=" false  ||ro.lichangshijian"
					value-format="yyyy-MM-dd HH:mm:ss"
					v-model="ruleForm.lichangshijian" 
					type="datetime"
					placeholder="离场时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item class="add-item" label="停车时长" prop="tingcheshizhang">
				<el-input v-model="tingcheshizhang" placeholder="停车时长" disabled></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="小时价格" prop="xiaoshijiage">
				<el-input-number v-model="ruleForm.xiaoshijiage" placeholder="小时价格" :disabled=" false ||ro.xiaoshijiage"></el-input-number>
			</el-form-item>
			<el-form-item class="add-item" label="停车费用" prop="tingchefeiyong">
				<el-input v-model="tingchefeiyong" placeholder="停车费用" disabled></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="账号" prop="zhanghao">
				<el-input v-model="ruleForm.zhanghao" 
					placeholder="账号" clearable :disabled=" false  ||ro.zhanghao"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="姓名" prop="xingming">
				<el-input v-model="ruleForm.xingming" 
					placeholder="姓名" clearable :disabled=" false  ||ro.xingming"></el-input>
			</el-form-item>
			<el-form-item class="add-item" label="费用备注" prop="feiyongbeizhu">
				<el-input
					type="textarea"
					:rows="8"
					placeholder="费用备注"
					v-model="ruleForm.feiyongbeizhu">
					</el-input>
			</el-form-item>

			<el-form-item class="add-btn-item">
				<el-button class="submitBtn"  type="primary" @click="onSubmit">
					<span class="icon iconfont icon-kaitongfuwu"></span>
					<span class="text">确定</span>
				</el-button>
				<el-button class="closeBtn" @click="back()">
					<span class="icon iconfont icon-shanchu1"></span>
					<span class="text">取消</span>
				</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				baseUrl: '',
				ro:{
					cheweibianhao : false,
					cheweimingcheng : false,
					cheweifenlei : false,
					fapiao : false,
					ruchangshijian : false,
					lichangshijian : false,
					tingcheshizhang : false,
					xiaoshijiage : false,
					tingchefeiyong : false,
					zhanghao : false,
					xingming : false,
					feiyongbeizhu : false,
					ispay : false,
				},
				type: '',
				userTableName: localStorage.getItem('UserTableName'),
				ruleForm: {
					cheweibianhao: '',
					cheweimingcheng: '',
					cheweifenlei: '',
					fapiao: '',
					ruchangshijian: '',
					lichangshijian: '',
					tingcheshizhang: '',
					xiaoshijiage: '',
					tingchefeiyong: '',
					zhanghao: '',
					xingming: '',
					feiyongbeizhu: '',
				},


				rules: {
					cheweibianhao: [
					],
					cheweimingcheng: [
					],
					cheweifenlei: [
					],
					fapiao: [
					],
					ruchangshijian: [
					],
					lichangshijian: [
					],
					tingcheshizhang: [
						{ validator: this.$validate.isIntNumer, trigger: 'blur' },
					],
					xiaoshijiage: [
						{ validator: this.$validate.isNumber, trigger: 'blur' },
					],
					tingchefeiyong: [
						{ validator: this.$validate.isNumber, trigger: 'blur' },
					],
					zhanghao: [
					],
					xingming: [
					],
					feiyongbeizhu: [
					],
					ispay: [
					],
				},
				centerType: false,
			};
		},
		computed: {
			tingcheshizhang : {
				get: function () {
					let h = this.ruleForm
					let a = 'h.ruchangshijian-h.lichangshijian'
					let n = a.split('-')
					let hour = this.getHour(h[n[0].split('h.')[1]], h[n[1].split('h.')[1]])
					this.ruleForm.tingcheshizhang = hour?hour:0
					return hour?hour:0
				}
				
			},


			tingchefeiyong:{
				get: function () {
					return 1*this.ruleForm.tingcheshizhang*this.ruleForm.xiaoshijiage
				}
			},

		},
		components: {
		},
		created() {
			if(this.$route.query.centerType){
				this.centerType = true
			}
			//this.bg();
			let type = this.$route.query.type ? this.$route.query.type : '';
			this.init(type);
			this.baseUrl = this.$config.baseUrl;
			this.ruleForm.ruchangshijian = this.getCurDateTime()
			this.ruleForm.lichangshijian = this.getCurDateTime()
		},
		methods: {
			// 获取时间间隔 单位小时
			getHour(first, last){
				let date1 = new Date(first)
				let date2 = new Date(last)
				let a = date1.getTime();
				let b = date2.getTime();
				var count = 0;
				for (var i = a; i < b; i += 3600 * 1000) {
					count++;
				}
				return count;
			},
			getMakeZero(s) {
				return s < 10 ? '0' + s : s;
			},
			// 下载
			download(file){
				window.open(`${file}`)
			},
			// 初始化
			init(type) {
				this.type = type;
				if(type=='cross'){
					var obj = JSON.parse(localStorage.getItem('crossObj'));
					for (var o in obj){
						if(o=='cheweibianhao'){
							this.ruleForm.cheweibianhao = obj[o];
							this.ro.cheweibianhao = true;
							continue;
						}
						if(o=='cheweimingcheng'){
							this.ruleForm.cheweimingcheng = obj[o];
							this.ro.cheweimingcheng = true;
							continue;
						}
						if(o=='cheweifenlei'){
							this.ruleForm.cheweifenlei = obj[o];
							this.ro.cheweifenlei = true;
							continue;
						}
						if(o=='fapiao'){
							this.ruleForm.fapiao = obj[o].split(",")[0];
							this.ro.fapiao = true;
							continue;
						}
						if(o=='ruchangshijian'){
							this.ruleForm.ruchangshijian = obj[o];
							this.ro.ruchangshijian = true;
							continue;
						}
						if(o=='lichangshijian'){
							this.ruleForm.lichangshijian = obj[o];
							this.ro.lichangshijian = true;
							continue;
						}
						if(o=='tingcheshizhang'){
							this.ruleForm.tingcheshizhang = obj[o];
							this.ro.tingcheshizhang = true;
							continue;
						}
						if(o=='xiaoshijiage'){
							this.ruleForm.xiaoshijiage = obj[o];
							this.ro.xiaoshijiage = true;
							continue;
						}
						if(o=='tingchefeiyong'){
							this.ruleForm.tingchefeiyong = obj[o];
							this.ro.tingchefeiyong = true;
							continue;
						}
						if(o=='zhanghao'){
							this.ruleForm.zhanghao = obj[o];
							this.ro.zhanghao = true;
							continue;
						}
						if(o=='xingming'){
							this.ruleForm.xingming = obj[o];
							this.ro.xingming = true;
							continue;
						}
						if(o=='feiyongbeizhu'){
							this.ruleForm.feiyongbeizhu = obj[o];
							this.ro.feiyongbeizhu = true;
							continue;
						}
					}
				}else if(type=='edit'){
					this.info()
				}
				// 获取用户信息
				this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
					if (res.data.code == 0) {
						var json = res.data.data;
					}
				});

				if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
					localStorage.removeItem('raffleType')
					setTimeout(() => {
						this.onSubmit()
					}, 300)
				}
			},

			// 多级联动参数
			// 多级联动参数
			info() {
				this.$http.get(`feiyongxinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
					if (res.data.code == 0) {
						this.ruleForm = res.data.data;
					}
				});
			},
			// 提交
			async onSubmit() {
				if(this.ruleForm.tingcheshizhang==0){
					this.$message.error('停车时长不能为空')
					return false
				}
				this.ruleForm.tingchefeiyong = this.tingchefeiyong
				await this.$refs["ruleForm"].validate(async valid => {
					if(valid) {
						if(this.type=='cross'){
							var statusColumnName = localStorage.getItem('statusColumnName');
							var statusColumnValue = localStorage.getItem('statusColumnValue');
							if(statusColumnName && statusColumnName!='') {
								var obj = JSON.parse(localStorage.getItem('crossObj'));
								if(!statusColumnName.startsWith("[")) {
									for (var o in obj){
										if(o==statusColumnName){
											obj[o] = statusColumnValue;
										}
									}
									var table = localStorage.getItem('crossTable');
									await this.$http.post(table+'/update', obj).then(res => {});
								}
							}
						}


						await this.$http.post(`feiyongxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(async res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										if(this.isBackAuth('feiyongxinxi','支付')&&this.type=='cross'){
											this.$confirm('是否跳转支付？') .then(_ => {
												let jumpParams = {
													id: res.data.data,
													centerType: 1
												}
												this.$router.push({path: '/index/feiyongxinxiDetail', query: jumpParams});
											}).catch(_ => {
												this.$router.go(-1);
											});
										}else {
											this.$router.go(-1);
										}
										
										
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				});
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 返回
			back() {
				this.$router.go(-1);
			},
			fapiaoUploadChange(fileUrls) {
				this.ruleForm.fapiao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
			},
		}
	};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.add-update-preview {
		padding: 0 0 20px;
		margin: 0px auto;
		color: #666;
		background: #fff;
		width: 1200px;
		font-size: 16px;
		position: relative;
		.add-update-form {
			margin: 20px 0 0;
			width: 100%;
			position: relative;
			.add-item.el-form-item {
				padding: 0 0 10px;
				margin: 0 0 10px;
				background: none;
				border-color: #ccc;
				border-width: 0 0 1px;
				border-style: dashed;
				/deep/ .el-form-item__label {
					padding: 0 10px 0 0;
					color: #000000;
					font-weight: 500;
					width: 180px;
					font-size: inherit;
					line-height: 40px;
					text-align: center;
				}
				/deep/ .el-form-item__content {
					margin-left: 180px;
				}
				.el-input {
					width: auto;
				}
				.el-input /deep/ .el-input__inner {
					border: 1px solid #ddd;
					border-radius: 0px;
					padding: 0 12px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input /deep/ .el-input__inner[readonly="readonly"] {
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 12px;
					box-shadow: none;
					color: rgba(85, 85, 127, 1.0);
					background: none;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input-number /deep/ .el-input__inner {
					text-align: left;
					border: 1px solid #ddd;
					border-radius: 0px;
					padding: 0 12px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input-number /deep/ .is-disabled .el-input__inner {
					text-align: left;
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 12px;
					box-shadow: none;
					color: rgba(85, 85, 127, 1.0);
					background: none;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-input-number /deep/ .el-input-number__decrease {
					display: none;
				}
				.el-input-number /deep/ .el-input-number__increase {
					display: none;
				}
				.el-select {
					width: auto;
				}
				.el-select /deep/ .el-input__inner {
					border: 1px solid #ddd;
					border-radius: 0px;
					padding: 0 10px;
					color: inherit;
					width: 100%;
					font-size: 16px;
					min-width: inherit !important;
					height: 40px;
				}
				.el-select /deep/ .is-disabled .el-input__inner {
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 10px;
					box-shadow: none;
					color: inherit;
					background: none;
					width: 100%;
					font-size: 16px;
					height: 40px;
				}
				.el-date-editor {
					width: auto;
				}
				.el-date-editor /deep/ .el-input__inner {
					border: 1px solid #ddd;
					border-radius: 0px;
					padding: 0 10px 0 30px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				.el-date-editor /deep/ .el-input__inner[readonly="readonly"] {
					border: 0;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 0 10px 0 30px;
					box-shadow: none;
					color: inherit;
					background: none;
					width: auto;
					font-size: 16px;
					height: 40px;
				}
				/deep/ .el-upload--picture-card {
					background: transparent;
					border: 0;
					border-radius: 0;
					width: auto;
					height: auto;
					line-height: initial;
					vertical-align: middle;
				}
				/deep/ .upload .upload-img {
					border: 1px solid #ddd;
					cursor: pointer;
					border-radius: 0px;
					color: #999;
					background: #fff;
					object-fit: cover;
					width: 80px;
					font-size: 26px;
					line-height: 60px;
					text-align: center;
					height: 60px;
				}
				/deep/ .el-upload-list .el-upload-list__item {
					border: 1px solid #ddd;
					cursor: pointer;
					border-radius: 0px;
					color: #999;
					background: #fff;
					object-fit: cover;
					width: 80px;
					font-size: 26px;
					line-height: 60px;
					text-align: center;
					height: 60px;
					font-size: 14px;
					line-height: 1.8;
				}
				/deep/ .el-upload .el-icon-plus {
					border: 1px solid #ddd;
					cursor: pointer;
					border-radius: 0px;
					color: #999;
					background: #fff;
					object-fit: cover;
					width: 80px;
					font-size: 26px;
					line-height: 60px;
					text-align: center;
					height: 60px;
				}
				/deep/ .el-upload__tip {
					color: #888;
					font-size: 16px;
				}
				.el-textarea /deep/ .el-textarea__inner {
					border: 1px solid #ddd;
					border-radius: 0px;
					padding: 12px;
					box-shadow: none;
					color: inherit;
					width: auto;
					font-size: 16px;
					min-height: 150px;
					min-width: 48%;
					height: auto;
				}
				.el-textarea /deep/ .el-textarea__inner[readonly="readonly"] {
					border: 0px solid #ddd;
					cursor: not-allowed;
					border-radius: 0px;
					padding: 12px;
					box-shadow: none;
					color: inherit;
					background: none;
					width: auto;
					font-size: 16px;
					min-height: 150px;
					min-width: 50%;
					height: auto;
				}
				/deep/ .el-input__inner::placeholder {
					color: #9E9E9E;
					font-size: inherit;
				}
				/deep/ textarea::placeholder {
					color: #9E9E9E;
					font-size: inherit;
				}
				.editor {
					background-color: #fff;
					border-radius: 0;
					padding: 0;
					box-shadow: none;
					margin: 0;
					width: 80%;
					min-height: 250px;
					border-color: #ccc;
					border-width: 1px;
					border-style: solid;
					height: auto;
				}
				.upload-img {
					object-fit: cover;
					width: 100px;
					height: 100px;
				}
				.viewBtn {
					border: 0;
					cursor: pointer;
					border-radius: 0px;
					padding: 0 20px;
					margin: 0;
					color: #333;
					background: #03abe930;
					display: inline-block;
					width: auto;
					font-size: 14px;
					line-height: 34px;
					height: 34px;
				}
				.viewBtn:hover {
				}
				.unviewBtn {
					border: 0;
					cursor: pointer;
					padding: 0 20px;
					margin: 0;
					color: #333;
					display: inline-block;
					font-size: 14px;
					line-height: 34px;
					border-radius: 0px;
					outline: none;
					background: #ddd;
					width: auto;
					height: 34px;
				}
				.unviewBtn:hover {
					background: #eee;
				}
			}
			.add-btn-item {
				padding: 0;
				margin: 20px 0;
				.submitBtn {
					border: 0;
					cursor: pointer;
					padding: 0 15px;
					margin: 0 20px 0 0;
					display: inline-block;
					font-size: 16px;
					line-height: 40px;
					border-radius: 2px;
					background: #66B9BB;
					width: auto;
					text-align: center;
					min-width: 120px;
					height: 40px;
					.icon {
						color: #fff;
					}
					.text {
						color: #fff;
					}
				}
				.submitBtn:hover {
					opacity: 0.8;
					.icon {
					}
					.text {
					}
				}
				.closeBtn {
					border: 0px solid #ddd;
					cursor: pointer;
					padding: 0 15px;
					margin: 0 20px 0 0;
					display: inline-block;
					font-size: 16px;
					line-height: 40px;
					border-radius: 2px;
					background: #858585;
					width: auto;
					text-align: center;
					min-width: 110px;
					height: 40px;
					.icon {
						color: #fff;
					}
					.text {
						color: #fff;
					}
				}
				.closeBtn:hover {
					opacity: 0.8;
					.icon {
					}
					.text {
					}
				}
			}
		}
	}
	.el-date-editor.el-input {
		width: auto;
	}
</style>
