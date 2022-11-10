import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  numberOfSheets: number;
  totalWeight: number;
  length: number;
  width: number;
  gram: number;
  selectedFormatID: number;
  selectedSizeID: number;
}

const initialState: initialState = {
  numberOfSheets: 0,
  totalWeight: 0,
  length: 650,
  width: 430,
  gram: 300,
  selectedFormatID: 1,
  selectedSizeID: 1,
};

const sheetsReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      numberOfSheets: state.numberOfSheets + 1,
      totalWeight: state.totalWeight,
      length: state.length,
      width: state.width,
      gram: state.gram,
      selectedFormatID: state.selectedFormatID,
      selectedSizeID: state.selectedSizeID,
    };
  } else if (action.type === "decrement") {
    return {
      numberOfSheets: state.numberOfSheets - 1,
      totalWeight: state.totalWeight,
      length: state.length,
      width: state.width,
      gram: state.gram,
      selectedFormatID: state.selectedFormatID,
      selectedSizeID: state.selectedSizeID,
    };
  } else if (action.type === "updateSheetsCount") {
    return {
      numberOfSheets: action.numberOfSheets,
      totalWeight: state.totalWeight,
      length: state.length,
      width: state.width,
      gram: state.gram,
      selectedFormatID: state.selectedFormatID,
      selectedSizeID: state.selectedSizeID,
    };
  } else if (action.type === "calculateWeight") {
    return {
      numberOfSheets: state.numberOfSheets,
      totalWeight:
        (state.length / 1000) *
        (state.width / 1000) *
        (state.gram / 1000) *
        state.numberOfSheets,
      length: state.length,
      width: state.width,
      gram: state.gram,
      selectedFormatID: state.selectedFormatID,
      selectedSizeID: state.selectedSizeID,
    };
  } else if (action.type === "sizeButtonPress") {
    return {
      numberOfSheets: state.numberOfSheets,
      totalWeight: state.totalWeight,
      length: state.length,
      width: state.width,
      gram: state.gram,
      selectedFormatID: state.selectedFormatID,
      selectedSizeID: action.sizeButtonID,
    };
  } else if (action.type === "formatButtonPress") {
    return {
      numberOfSheets: state.numberOfSheets,
      totalWeight: state.totalWeight,
      length: state.length,
      width: state.width,
      gram: action.weight,
      selectedFormatID: action.formatButtonID,
      selectedSizeID: state.selectedSizeID,
    };
  } else {
    return {
      numberOfSheets: state.numberOfSheets,
      totalWeight: state.totalWeight,
      length: state.length,
      width: state.width,
      gram: state.gram,
      selectedFormatID: state.selectedFormatID,
      selectedSizeID: state.selectedSizeID,
    };
  }
};

const store = createStore(sheetsReducer);
export default store;
