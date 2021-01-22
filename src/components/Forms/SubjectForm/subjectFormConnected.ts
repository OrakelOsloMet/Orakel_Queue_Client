import {RootState} from "../../../store";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import SubjectForm from "./subjectForm";
import {fetchSubjects} from "../../../store/actions/subjectActions";

const mapStateToProps = (state: RootState) => {
    return {
        subjects: state.subjects.allSubjectData,
        loading: state.queue.loading,
        error: state.queue.error
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        fetchSubjects: fetchSubjects
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectForm);