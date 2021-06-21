<template>
  <div>
    <div class="page-header">
      <time-bit-breadcrumb>
        <time-bit-breadcrumb-item
          ><time-bit-icon type="home" /> Trang chủ</time-bit-breadcrumb-item
        >
        <time-bit-breadcrumb-item>Khách hàng</time-bit-breadcrumb-item>
      </time-bit-breadcrumb>
      <div class="header-action">
        <time-bit-button
          type="link"
          style="color: green"
          @click="addNew"
          icon="plus"
          >Thêm mới</time-bit-button
        >
      </div>
    </div>
    <div class="page-content">
      <time-bit-table
        :pagination="false"
        rowKey="CustomerId"
        bordered
        :columns="columns"
        :data-source="dataObject.data"
        :loading="dataObject.loading"
        size="small"
      >
        <div slot="action" slot-scope="text, record">
          <time-bit-button
            type="link"
            @click="edit(record.CustomerId)"
            icon="edit"
          />
          <time-bit-popconfirm
            title="Bạn có chắc chắn muốn xóa không?"
            ok-text="Không"
            okType='danger'
            @cancel="deleteItem(record.CustomerId)"
            cancel-text="Đồng ý"
          >
            <time-bit-icon slot="icon" type="question-circle" />
            <time-bit-button
              type="link"
              style="color: red"
              icon="delete"
            />
          </time-bit-popconfirm>

          <!-- <time-bit-popconfirm
            v-if="dataSource.length"
            title="Sure to delete?"
            @confirm="() => onDelete(record.key)"
          >
            <a href="javascript:;">Delete</a>
          </time-bit-popconfirm> -->
        </div>
      </time-bit-table>
    </div>

    <div class="page-pagination">
      <time-bit-pagination
        :pageSize="dataObject.pageSize"
        :current="dataObject.current"
        :total="dataObject.total"
        @change="pagingChange"
      />
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import * as api from "../../../apis/apibase";
const { mapState, mapActions } = createNamespacedHelpers("customer");

export default {
  computed: {
    ...mapState(["dataObject"]),
    columns() {
      return [
        {
          title: "Mã khách hàng",
          dataIndex: "CustomerCode",
          width: 150,
        },
        {
          title: "Tên khách hàng",
          dataIndex: "CustomerName",
          width: 200,
        },
        {
          title: "Địa chỉ",
          dataIndex: "Address",
        },
        {
          title: "Số điện thoại",
          dataIndex: "Phone",
          width: 120,
        },
        {
          title: "Tuổi",
          dataIndex: "Age",
          width: 100,
          align: "right",
        },
        {
          title: "Ngày sinh",
          dataIndex: "BirthDate",
          width: 100,
          align: "center",
        },
        {
          title: "Doanh thu",
          dataIndex: "Revenue",
          width: 150,
          align: "right",
        },
        {
          title: "",
          key: "action",
          width: 100,
          scopedSlots: { customRender: "action" },
        },
      ];
    },
  },
  methods: {
    ...mapActions(["changeData", "changeState"]),
    addNew: function () {
      this.$router.push("/customer/add");
    },
    edit: function (id) {
      var me=this;
      me.$router.push("/customer/"+id)
    },
    deleteItem: function (id) {
      var me=this;
      api.deleteById(id,'Customer').then(result=>{
        me.refresh();
      });
    },
    loadData: function (currentPage, take, filters, sorters) {
      var me = this;
      var param = {
        Skip: (currentPage - 1) * take,
        Take: take,
        OrderInfos: sorters,
        WhereInfos: filters,
      };
      api.paging(param, "Customer").then((result) => {
        var datas = JSON.parse(result.data.data);
        me.changeData(datas.Data);
        me.changeState({
          current: currentPage,
          total: datas.TotalCount,
          loading: false,
        });
      });
    },
    refresh: function () {
      var me=this;
      me.loadData(me.dataObject.current,me.dataObject.pageSize,me.dataObject.filters,me.dataObject.sorters);
    },
    pagingChange: function (page, pageSize) {
      var me = this;
      me.loadData(page, pageSize);
    },
  },
  mounted() {
    var me = this;
    me.loadData(1, me.dataObject.pageSize);
  },
};
</script>
<style>
@import url("/customer.css");
</style>