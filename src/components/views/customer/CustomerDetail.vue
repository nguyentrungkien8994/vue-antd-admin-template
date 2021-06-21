<template>
  <div v-if="loaded" style="padding: 30px 10px 10px 10px">
    <time-bit-spin :spinning="busy">
      <time-bit-form
        ref="ruleForm"
        :model="masterData"
        :rules="rules"
        :label-col="{ span: 3 }"
        :wrapper-col="{ span: 8 }"
      >
        <time-bit-form-item label="Mã khách hàng" prop="CustomerCode" >
          <time-bit-input v-model="masterData.CustomerCode" />
        </time-bit-form-item>
        <time-bit-form-item label="Tên khách hàng" prop="CustomerName">
          <time-bit-input
            v-model="masterData.CustomerName"
          />
        </time-bit-form-item>
        <time-bit-form-item ref="Phone" label="Số điện thoại" prop="Phone">
          <time-bit-input
            v-model="masterData.Phone"
          />
        </time-bit-form-item>
        <time-bit-form-item label="Ngày sinh" prop="BirthDate">
          <time-bit-date-picker v-model="masterData.BirthDate" />
        </time-bit-form-item>
        <time-bit-form-item label="Tuổi" prop="Age">
          <time-bit-input-number v-model="masterData.Age" />
        </time-bit-form-item>
        <time-bit-form-item label="Doanh số" prop="Revenue">
          <time-bit-input-number
            :formatter="
              (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
            :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
            v-model="masterData.Revenue"
          />
        </time-bit-form-item>
        <time-bit-form-item label="Địa chỉ" prop="Address">
          <time-bit-input v-model="masterData.Address" type="textarea" />
        </time-bit-form-item>
        <time-bit-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <time-bit-button type="primary" @click="onSubmit">
            Lưu
          </time-bit-button>
          <time-bit-button
            type="danger"
            style="margin-left: 10px"
            @click="cancelForm"
          >
            Hủy bỏ
          </time-bit-button>
        </time-bit-form-item>
      </time-bit-form>
    </time-bit-spin>
  </div>
  <div v-else class="busy-box">
    <time-bit-spin size="large" />
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import * as api from "../../../apis/apibase";
const { mapState, mapActions } = createNamespacedHelpers("customerdetail");

export default {
  computed: {
    ...mapState(["masterData", "busy", "loaded"]),
    rules() {
      return {
        CustomerCode: [
          { required: true, message: "Không được để trống", trigger: "blur" },
          { max: 50, message: "Không được vượt quá 50 ký tự", trigger: "blur" },
        ],
        CustomerName: [
          { required: true, message: "Không được để trống", trigger: "blur" },
          {
            max: 200,
            message: "Không được vượt quá 200 ký tự",
            trigger: "blur",
          },
        ],
        Phone: [
          { max: 20, message: "Không được vượt quá 20 ký tự", trigger: "blur" },
        ],
        BirthDate: [
          { required: true, message: "Không được để trống", trigger: "change" },
        ],
        Address: [
          {
            max: 255,
            message: "Không được vượt quá 255 ký tự",
            trigger: "blur",
          },
        ],
      };
    },
  },
  methods: {
    ...mapActions(["changeMasterData", "changeLoadedData", "changeBusy"]),
    loadInfor() {
      var me = this;
      var Id = me.$route.params.id;
      if (Id.toLowerCase() == "add") {
        Id = "00000000-0000-0000-0000-000000000000";
      }
      api.getById(Id, "Customer").then((result) => {
        var masterData = JSON.parse(result.data.data);
        me.changeLoadedData(true);
        me.changeMasterData(masterData);
      });
    },
    onSubmit() {
      var me = this;
      me.$refs.ruleForm.validate((valid) => {
        debugger;
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancelForm() {
      this.$router.push("/customer");
    },
  },
  mounted() {
    var me = this;
    me.changeLoadedData(false);
    me.loadInfor();
  },
  created(){
    var me=this;
    debugger
    Reflect.ownKeys(this.$store.getters)
  }
};
</script>