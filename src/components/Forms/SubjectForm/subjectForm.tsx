import React, {FC, useEffect, useState} from "react";
import {DeleteButton, SubmitButton} from "../../UI/Buttons/buttons";
import {useForm} from "react-hook-form";
import Input from "../Inputs/input";
import Select from "../Inputs/select";
import {FormElementType, Semester} from "../../../constants/constants";
import {convertObjectStringsToPrimitives, updateObject} from "../../../utilities/objectUtilities";
import {createUseFormRef, inputHasError} from "../../../utilities/formUtilities";
import {SubjectDispatch} from "../../../store/types";
import {IRadioConfig, ISelectConfig, IValidatedTextConfig} from "../../../models/inputModels";
import Radio from "../Inputs/radio";
import {ISubject} from "../../../models/types";
import SwalConfirmModal from "../../UI/Modals/SwalModals/swalConfirmModal";

enum FormElements {
    SELECTED_SUBJECT = "selectedSubject",
    NEW_SUBJECT_NAME = "newSubjectName",
    CHECKED_SEMESTER = "checkedSemester",
}

type FormValues = {
    selectedSubject: string,
    newSubjectName: string,
    checkedSemester: string,
}

type Props = {
    subjects: Array<ISubject>;
    loading: boolean;
    error: string | null;
    fetchSubjects: (allSubjects?: boolean) => (dispatch: SubjectDispatch) => void;
    addEditSubject: (subject: ISubject, edit: boolean) => void;
    deleteSubject: (id: number) => void;
}

const SubjectForm: FC<Props> = (props) => {
    const {NEW_SUBJECT_NAME, SELECTED_SUBJECT, CHECKED_SEMESTER} = FormElements;
    const NEW_SUBJECT = "<New Subject>";

    const {register, handleSubmit, reset, errors, formState: {isSubmitSuccessful}} = useForm();
    const [editState, setEditState] = useState<boolean>(false);

    const [subjectSelect, setSubjectSelect] = useState<ISelectConfig>({
        type: FormElementType.SELECT,
        name: SELECTED_SUBJECT,
        options: []
    });

    const [nameInput, setNameInput] = useState<IValidatedTextConfig>({
        type: FormElementType.VALIDATED_TEXT,
        name: NEW_SUBJECT_NAME,
        key: NEW_SUBJECT_NAME,
        placeholder: "Subject Name",
        validation: {
            minLength: 3,
            errorMessage: "Please provide a subject name of with at least 3 characters"
        },
    });

    const [checkedSemester, setCheckedSemester] = useState<IRadioConfig>({
        type: FormElementType.RADIO,
        name: CHECKED_SEMESTER,
        buttons: [
            {label: Semester.SPRING, value: 0, key: Semester.SPRING, defaultChecked: true},
            {label: Semester.AUTUMN, value: 1, key: Semester.AUTUMN, defaultChecked: false}
        ]
    });

    //Fills the subjectselector in the first render cycle.
    useEffect(() => {
        if (props.subjects.length > 0) {
            fillSubjectSelector();
        } else {
            props.fetchSubjects(true);
        }
    }, [props.subjects])

    //Used to reset the form whenever is is submitted.
    useEffect(() => {
        if (isSubmitSuccessful) {
            resetForm();
        }
    }, [isSubmitSuccessful, reset])

    const fillSubjectSelector = () => {
        const subjectListUpdated = {...subjectSelect};
        subjectListUpdated.options = [];

        subjectListUpdated.options.push({value: {name: NEW_SUBJECT}, displayValue: NEW_SUBJECT})
        props.subjects.forEach(subject => {
            subjectListUpdated.options.push({value: subject, displayValue: subject.name});
        });

        setSubjectSelect(subjectListUpdated);
    };

    //Due to how nameInput's default value is set each time a subject is selected, the out of the box reset function
    //from hook-form doesn't suffice.
    const resetForm = () => {
        const nameInputCleared = updateObject(nameInput, {defaultValue: ""})
        setNameInput(nameInputCleared);
        setEditState(false);
        reset();
    }

    const registrationHandler = async (formData: FormValues) => {
        const selectedSubject = convertObjectStringsToPrimitives(JSON.parse(formData.selectedSubject));

        //A new subject won't have an id, set it to zero in that case
        const subject = {
            id: selectedSubject.id ? selectedSubject.id : 0,
            createdDate: "",
            name: formData.newSubjectName,
            semester: formData.checkedSemester === "0" ? Semester.SPRING : Semester.AUTUMN,
        }

        if (editState) {
            const userConfirmation = await SwalConfirmModal({
                title: `Confirm new details of ${selectedSubject.name}`,
                contentText: `New name: ${subject.name}. New semester: ${subject.semester}`
            });

            if (userConfirmation) props.addEditSubject(subject, true);

        } else {

            const userConfirmation = await SwalConfirmModal({
                title: `Are you sure you want to add new subject ${subject.name}?`,
                contentText: `If you have selected the current semester as this subject's semester, it will be visible
                to all users once it is saved`
            });

            if (userConfirmation) props.addEditSubject(subject, false);
        }
    }

    const deleteHandler = async (formData: FormValues) => {
        const selectedSubject = convertObjectStringsToPrimitives(JSON.parse(formData.selectedSubject));
        const userConfirmation = await SwalConfirmModal({title: `Delete ${selectedSubject.name}?`, contentText: "This action is final and cannot be reverted."});

        if (userConfirmation) props.deleteSubject(selectedSubject.id);
    };

    //Whenever a subject is selected, the name and semester inputs are to be updated to reflect the selected subject's name
    //and semester. Reset to default values if <New Subject> is selected.
    const subjectSelectHandler = (event: React.FormEvent<HTMLInputElement>) => {
        const nameInputFilled = {...nameInput};
        const semesterCheckedUpdated = {...checkedSemester}
        const selectedSubject: ISubject = JSON.parse(event.currentTarget.value);

        if (selectedSubject.name === NEW_SUBJECT) {
            setEditState(false);
            nameInputFilled.placeholder = "Subject Name";
            nameInputFilled.defaultValue = "";
            nameInputFilled.key = NEW_SUBJECT;

        } else {
            setEditState(true);
            nameInputFilled.defaultValue = selectedSubject.name;
            nameInputFilled.key = selectedSubject.name;

            semesterCheckedUpdated.buttons.forEach(button => {
                button.key = selectedSubject.name;
                button.defaultChecked = button.label === selectedSubject.semester;
            })
        }

        setNameInput(nameInputFilled);
        setCheckedSemester(semesterCheckedUpdated);
    }

    const form = <form className={"mt-2 mb-2"} style={{width: "80%", margin: "auto"}}>
        <Select ref={createUseFormRef(subjectSelect, register)} inputConfig={subjectSelect} onChange={(event) => subjectSelectHandler(event)}/>
        <Input ref={createUseFormRef(nameInput, register)} inputConfig={nameInput} error={inputHasError(errors, nameInput)}/>
        <Radio ref={createUseFormRef(checkedSemester,register)} inputConfig={checkedSemester}/>

        <div className={"form-group"}>
            <SubmitButton onClick={handleSubmit(registrationHandler)}>{editState ? "Save Edit" : "Save New"}</SubmitButton>
            {editState ? <DeleteButton className={"ml-2"} onClick={handleSubmit(deleteHandler)}>Delete Subject</DeleteButton> : null}
        </div>
    </form>

    return (
        <>
            {form}
        </>
    )
}

export default SubjectForm;