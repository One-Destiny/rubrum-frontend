import {
    FETCH_INWARD_LIST_REQUEST,
    FETCH_INWARD_LIST_SUCCESS,
    FETCH_INWARD_LIST_ERROR,

    SET_INWARD_DETAILS,
    SUBMIT_INWARD_ENTRY,
    SUBMIT_INWARD_SUCCESS,
    SUBMIT_INWARD_ERROR,
} from "../../constants/ActionTypes";

export const fetchInwardList = () => ({
  type: FETCH_INWARD_LIST_REQUEST,
});

export const fetchInwardListSuccess = (inwardList) => ({
    type: FETCH_INWARD_LIST_SUCCESS,
    inwardList
});

export const fetchInwardListError = (error) => ({
    type: FETCH_INWARD_LIST_ERROR,
    error
});

export const setInwardDetails = (inward) => ({
    type: SET_INWARD_DETAILS,
    inward
});

export const submitInwardEntry = (inward) => ({
    type: SUBMIT_INWARD_ENTRY,
    inward
});

export const submitInwardSuccess = (inward) => ({
    type: SUBMIT_INWARD_SUCCESS,
    inward
});

export const submitInwardError = (inward) => ({
    type: SUBMIT_INWARD_ERROR,
    inward
});

