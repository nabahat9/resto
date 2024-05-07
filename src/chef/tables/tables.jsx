import "./tables.css";
import Table from "../table/table";

function Tables() {
  const table1 = {
    tableNumber: 3,
    tableOrders: [
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaMargerita",
        mealQuantity: 3,
        additions: [],
      },
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaNapolitania",
        mealQuantity: 3,
        additions: [],
      },
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaNapolitania",
        mealQuantity: 3,
        additions: [],
      },
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaNapolitania",
        mealQuantity: 3,
        additions: [],
      },
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaNapolitania",
        mealQuantity: 3,
        additions: [],
      },
    ],
  };
  const table2 = {
    tableNumber: 2,
    tableOrders: [
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaMargerita",
        mealQuantity: 3,
        additions: [],
      },
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaNapolitania",
        mealQuantity: 3,
        additions: [],
      },
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaNapolitania",
        mealQuantity: 3,
        additions: [],
      },
    ],
  };
  const table3 = {
    tableNumber: 2,
    tableOrders: [
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaMargerita",
        mealQuantity: 3,
        additions: [],
      },
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaNapolitania",
        mealQuantity: 3,
        additions: [],
      },
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaNapolitania",
        mealQuantity: 3,
        additions: [],
      },
    ],
  };
  const table4 = {
    tableNumber: 2,
    tableOrders: [
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaMargerita",
        mealQuantity: 3,
        additions: [],
      },
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaNapolitania",
        mealQuantity: 3,
        additions: [],
      },
      {
        mealPic: "src/chef/chefAssets/meal.png",
        mealName: "pizzaNapolitania",
        mealQuantity: 3,
        additions: [],
      },
    ],
  };
  let ordersArray = [table1, table2];
  return (
    <div className="tablesList">
      <Table
        tableOrders={table1.tableOrders}
        tableNumber={table1.tableNumber}
      />
      <Table
        tableOrders={table2.tableOrders}
        tableNumber={table2.tableNumber}
      />
      <Table
        tableOrders={table3.tableOrders}
        tableNumber={table3.tableNumber}
      />
      <Table
        tableOrders={table4.tableOrders}
        tableNumber={table4.tableNumber}
      />
      <Table
        tableOrders={table1.tableOrders}
        tableNumber={table1.tableNumber}
      />
      <Table
        tableOrders={table2.tableOrders}
        tableNumber={table2.tableNumber}
      />
      <Table
        tableOrders={table3.tableOrders}
        tableNumber={table3.tableNumber}
      />
      <Table
        tableOrders={table4.tableOrders}
        tableNumber={table4.tableNumber}
      />
    </div>
  );
}
export default Tables;
