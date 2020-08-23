import React from "react";

const Categories = () => {
  return (
    <div>
      <select id="courseCategory" class="form-control">
        <option value="default">Choose a category</option>
        <option value="328" name="328">
          "Finance & Accounting"
        </option>
        <option value="288" name="288">
          " Development"
        </option>
        <option value="268" name="268">
          "Business"
        </option>
        <option value="294" name="294">
          "IT & Software"
        </option>
        <option value="292" name="292">
          "Office Productivity"
        </option>
        <option value="296" name="296">
          "Personal Development"
        </option>
        <option value="269" name="269">
          "Design"
        </option>
        <option value="290" name="290">
          "Marketing"
        </option>
        <option value="274" name="274">
          "Lifestyle"
        </option>
        <option value="273" name="273">
          "Photography"
        </option>
        <option value="276" name="276">
          "Health & Fitness"
        </option>
        <option value="278" name="278">
          "Music"
        </option>
        <option value="300" name="300">
          "Teaching & Academics"
        </option>
        <option value="-1">I don't know yet</option>
      </select>
      {/* <FormSelect
        options={[
          "Finance & Accounting",
          "Development",
          "Business",
          "IT & Software",
          "Office Productivity",
          "Personal Development",
          "Design",
          "Marketing",
          "Lifestyle",
          "Photography",
          "Health & Fitness",
          "Music",
          "Teaching & Academics",
        ]}
      /> */}
    </div>
  );
};

export default Categories;
