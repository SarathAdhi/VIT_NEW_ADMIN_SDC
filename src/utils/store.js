import axios from "@lib/axios";
import create from "zustand";

export const appStore = create((set) => ({
  user: {},
  setProfile: async (user) => {
    set({ user });
  },

  isAuth: false,
  isAdmin: false,

  setIsAuth: async (isAuth) => {
    set({ isAuth });
  },

  getProfile: async () => {
    try {
      const { isAuth, user } = await axios.get("/auth/verify");

      // const userImgResponse = await fetch(`http://172.16.2.21:9001/hrms/get/image/by/id/${user.id}`);
      // const userImg = await userImgResponse.json()

      // console.log({userImg})

      set((state) => {
        state.getNotifications();
        return { isAuth, user, isAdmin: user.role === "ADMIN" };
      });
    } catch (err) {
      localStorage.removeItem("token");
    }
  },

  notificationCount: 0,

  getNotifications: async () => {
    try {
      let notification = await axios.get("/faculty/approvals");
      const unApprovedFaculties = notification?.filter((e) => !e.isApproved);

      set({ notificationCount: unApprovedFaculties?.length });
    } catch (error) {}
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ isAuth: false });
  },
}));
