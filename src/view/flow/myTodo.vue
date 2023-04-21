<template>
  <div>
    我的代办

    <div>
      <el-table
        :data="tableData1"
        style="width: 100%"
        row-key="id"
        border
        lazy
        :load="load"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <template v-for="(item, index) in columnData">
          <el-table-column
            :type="item.types"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
          >
            <template v-if="item.children">
              <el-table-column
                v-for="val in item.children"
                :type="val.types"
                :key="val.prop"
                :prop="val.prop"
                :label="val.label"
              >
              </el-table-column>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>

    <div>===========================================================================</div>

    <div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city.id" :key="city.id">{{
          city.cityName
        }}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedCities: [],
      cities: [
        { id: 1, cityName: "上海" },
        { id: 2, cityName: "北京" },
        { id: 3, cityName: "广州" },
        { id: 4, cityName: "深圳" },
      ],

      columnData: [
        { prop: "date", label: "日期", types: "" },
        {
          prop: "name",
          label: "姓名",
          types: "",
          children: [
            { prop: "address", label: "地址", types: "" },
            { prop: "date", label: "日期" },
            { prop: "name", label: "姓名", types: "" },
          ],
        },
        { prop: "address", label: "地址", types: "" },
      ],
      tableData1: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          hasChildren: true,
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
  methods: {
    handleCheckedCitiesChange(event, item) {
      console.log(event);
      console.log("checkedCities", this.checkedCities);
    },
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
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
        ]);
      }, 1000);
    },
  },
};
</script>
