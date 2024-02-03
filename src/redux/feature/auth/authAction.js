import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiText } from "../../../utils/API";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password, navigate, toast }) => {
    try {
      const response = await apiText.post("/auth/login", { email, password });
      localStorage.setItem("NHHD:token", response.data.token);
      if (response.data.token) {
        toast.success(response.data.message);
        navigate("/");
      }
      if (response.data.success === false) {
        toast.error(response.data.message);
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/change-password",
  async ({ password, toast }) => {
    try {
      const response = await apiText.post(
        "/auth/change-password",
        { password },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("NHHD:token")}`,
          },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
      }
      if (response.data.success === false) {
        toast.error(response.data.message);
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchProfile = createAsyncThunk("get/profile", async () => {
  try {
    const response = await apiText.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("NHHD:token")}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
});
