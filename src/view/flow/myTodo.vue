<template>
  <div>
    我的代办

    <div>
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
      >
        >
        <template>
          <el-table-column
            v-for="(item, index) in columnData"
            :type="item.type"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
          >
          </el-table-column>
          <!-- v-if="item.type" -->
          <!-- <el-table-column v-else :prop="item.prop" :key="item.prop" :label="item.label">
          </el-table-column> -->
        </template>
      </el-table>
    </div>

    <!--  :type="item.type ? '' : 'selection'"-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      istree: false,
      columnData: [
        { prop: "date", label: "日期", type: "" },
        { prop: "name", label: "姓名", type: "" },
        { prop: "address", label: "地址", type: "" },
      ],
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
          ],
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>
