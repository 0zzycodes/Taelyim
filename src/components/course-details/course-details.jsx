import React from "react";
import { connect } from "react-redux";
// import { firestore } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import SunEditor from "suneditor-react";
// import plugins from "suneditor/src/plugins";
import { GenerateId } from "../../utils/id-generator";
import { selectCourseDetailShow } from "../../redux/dashboard/selectors";
import { toggleCourseDetailShow } from "../../redux/dashboard/actions";
import loader from "../../assets/loader.gif";
import FormSelect from "../form-select/form-select";

import "suneditor/dist/css/suneditor.min.css";
import "./course-details.scss";

class CourseDetails extends React.Component {
  state = {
    category: "",
    title: "",
    body: "",
    discount: "",
    hook: "",
    price: "",
    today: "",
    isLoading: false,
    errorMessage: "",
    successMessage: "",
  };
  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {});
  };
  handleChange = (content) => {
    this.setState({ body: content });
  };
  handleCancel = () => {
    const { body, category, hook, title, discount, price } = this.state;
    if (body !== "" || title !== "") {
      this.setState({ isLoading: !this.state.isLoading });
      const newDraft = {
        category,
        description: body,
        discount,
        hook,
        price,
        title,
      };
      //   this.props.updateDraft([...this.props.draft, newDraft]);
      this.props.toggleCourseDetailShow(!this.props.courseDetailShow);
    }
    this.props.toggleCourseDetailShow(!this.props.courseDetailShow);
  };

  handlePostTopic = async () => {
    const { body, hook, title, category, discount, price } = this.state;
    const id = GenerateId();
    if (body === "" || title === "") {
      this.setState({ errorMessage: "All fields is required" });
      return;
    }
    this.setState({ isLoading: !this.state.isLoading });
    const newTopic = {
      id,
      body,
      title,
      discount,
      hook,
      price,
      category,
    };
    try {
      //   await firestore.collection("blogs").doc(id).set(newTopic);
      this.setState({
        isLoading: !this.state.isLoading,
        successMessage: "Blog successfully posted",
      });
      this.props.toggleCourseDetailShow(!this.props.courseDetailShow);
    } catch (error) {
      this.setState({ errorMessage: "Failed, try again" });
    }
  };
  componentDidMount() {
    const now = new Date();

    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + now.getMonth()).slice(-2);

    const today = now.getFullYear() + "-" + month + "-" + day;
    this.setState({ today });
  }
  render() {
    const {
      errorMessage,
      successMessage,
      category,
      title,
      hook,
      discount,
      price,
    } = this.state;
    return (
      <div className="course-details">
        {errorMessage !== "" && (
          <span className="noty error">{errorMessage}</span>
        )}
        {successMessage !== "" && (
          <span className="noty success">{successMessage}</span>
        )}
        <div className="group-input">
          <label>
            Title <span className="required">required</span>
          </label>
          <input
            type="text"
            name="title"
            required
            value={title}
            className="form-input"
            placeholder="Title"
            onChange={this.handleChangeInput}
          />
        </div>
        <div className="group-input">
          <label>
            Hook <span className="required">required</span>
          </label>
          <input
            type="text"
            name="hook"
            required
            value={hook}
            className="form-input"
            placeholder="Hook"
            onChange={this.handleChangeInput}
          />
        </div>
        <div className="group-input">
          <label>
            Price <span className="required">required</span>
          </label>
          <input
            type="number"
            name="price"
            required
            value={price}
            className="form-input"
            placeholder="Price"
            onChange={this.handleChangeInput}
          />
        </div>
        <div className="group-input">
          <label>
            Discount <span className="required">required</span>
          </label>
          <input
            type="number"
            name="discount"
            required
            value={discount}
            className="form-input"
            placeholder="Discount"
            onChange={this.handleChangeInput}
          />
        </div>
        <div className="group-input">
          <label>
            Category <span className="required">required</span>
          </label>
          <FormSelect
            name="category"
            value={category}
            required
            defaul={"Select"}
            handleChange={this.handleChangeInput}
            options={["Book Review", "Lit Anatomy", "African Lit & Life"]}
          />
        </div>
        <div className="editor-group">
          <label>
            Description <span className="required">required</span>
          </label>
          <SunEditor
            onChange={this.handleChange}
            enableToolbar={true}
            showToolbar={true}
            placeholder="Enter content"
            show={true}
            enable={true}
            setOptions={{
              height: 300,
              width: "100%",
              mode: "classic",
              katex: "window.katex",
              buttonList: [
                [
                  "undo",
                  "redo",
                  "font",
                  "fontSize",
                  "formatBlock",
                  "paragraphStyle",
                  "blockquote",
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                  "fontColor",
                  "hiliteColor",
                  "textStyle",
                  "removeFormat",
                  "outdent",
                  "indent",
                  "align",
                  "horizontalRule",
                  "list",
                  "lineHeight",
                  "table",
                  "link",
                  "math",
                  "fullScreen",
                  "preview",
                ],
              ],
            }}
          />
        </div>
        <div className="new-post-editor-footer">
          <span className="cancel-btn btn" onClick={this.handleCancel}>
            Cancel
          </span>
          <span className="post-topic-btn btn" onClick={this.handlePostTopic}>
            Add Details{" "}
            {this.state.isLoading ? (
              <img src={loader} alt="loader gif" />
            ) : null}
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  courseDetailShow: selectCourseDetailShow,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCourseDetailShow: (isShow) => dispatch(toggleCourseDetailShow(isShow)),
  // toggleEditor: (isShow) => dispatch(toggleEditor(isShow)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
