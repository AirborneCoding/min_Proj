import { createSlice } from '@reduxjs/toolkit'
// navbar data
import { submenuHome } from '@/components/home/data'

const initialState = {
  isSubmenuOpen: false,
  page: [],
  page2: '',
  subLinks: submenuHome,
  toggleLinks: true,
  showProfileShort: false,
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    openSubmenu: (state, action) => {
      state.isSubmenuOpen = true
      state.subLinks.find((item) => {
        state.page2 = action.payload
      })
      // state.subLinks.map((item)=> {
      //   if(item.page === action.payload){
      //     return state.page2 = action.payload;
      //   }
      // })
    },
    closeSubmenu: (state) => {
      state.isSubmenuOpen = false
    },
    toggleLinks: (state) => {
      state.toggleLinks = true
    },
    setShowProfileShort: (state, action) => {
      state.showProfileShort = action.payload
    },
  },
})
export const { openSubmenu, closeSubmenu, toggleLinks, setShowProfileShort } =
  navbarSlice.actions
export default navbarSlice.reducer
