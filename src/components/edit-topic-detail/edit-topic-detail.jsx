import React from "react";
import { connect } from "react-redux";
// import { firestore } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import SunEditor from "suneditor-react";
// import plugins from "suneditor/src/plugins";
import { GenerateId } from "../../utils/id-generator";
import {
  selectCourseTopicShow,
  selectActiveTopic,
} from "../../redux/dashboard/selectors";
import { toggleCourseTopicShow } from "../../redux/dashboard/actions";
import loader from "../../assets/loader.gif";

import "suneditor/dist/css/suneditor.min.css";

import "./edit-topic-detail.scss";

class EditTopicDetails extends React.Component {
  state = {
    category: this.props.activeTopic.category,
    title: this.props.activeTopic.title,
    body: "",
    video_url: this.props.activeTopic.isVideo
      ? this.props.activeTopic.video_url
      : "",
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
    const { body, category, title, video_url } = this.state;
    if (body !== "" || title !== "") {
      this.setState({ isLoading: !this.state.isLoading });
      const newDraft = {
        category,
        description: body,

        video_url,
        title,
      };
      //   this.props.updateDraft([...this.props.draft, newDraft]);
      this.props.toggleCourseTopicShow(!this.props.courseTopicShow);
    }
    this.props.toggleCourseTopicShow(!this.props.courseTopicShow);
  };

  handlePostTopic = async () => {
    const { body, title, category, video_url } = this.state;
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
      video_url,
      category,
    };
    try {
      //   await firestore.collection("blogs").doc(id).set(newTopic);
      this.setState({
        isLoading: !this.state.isLoading,
        successMessage: "Blog successfully posted",
      });
      this.props.toggleCourseTopicShow(!this.props.courseTopicShow);
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
  updateSliderItem = async (check) => {
    // await firestore
    //   .collection("blogs")
    //   .doc(data.id)
    //   .update({ slider_item: check });
  };
  render() {
    const { errorMessage, successMessage, title, video_url } = this.state;
    return (
      <div className="edit-topic-details">
        {errorMessage !== "" && (
          <span className="noty error">{errorMessage}</span>
        )}
        {successMessage !== "" && (
          <span className="noty success">{successMessage}</span>
        )}
        <div className="course-preview-checker">
          <span>Mark as Course Preview</span>
          <div
            className="course-preview-check"
            onClick={() => this.updateSliderItem.bind(this, false)}
            style={true ? { backgroundColor: "#6ab5b9" } : {}}
          ></div>
        </div>
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
        {this.props.activeTopic.isVideo && (
          <div className="group-input">
            <label>
              Video Url <span className="required">required</span>
            </label>
            <input
              type="text"
              name="video_url"
              required
              value={video_url}
              className="form-input"
              placeholder="Video Url"
              onChange={this.handleChangeInput}
            />
          </div>
        )}

        <div className="editor-group">
          <label>
            Description <span className="required">required</span>
          </label>
          <SunEditor
            etContents={this.props.activeTopic.body}
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
              tabDisable: true,
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
            Add Topic{" "}
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
  activeTopic: selectActiveTopic,
  courseTopicShow: selectCourseTopicShow,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCourseTopicShow: (topic) => dispatch(toggleCourseTopicShow(topic)),
  // toggleEditor: (isShow) => dispatch(toggleEditor(isShow)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditTopicDetails);
