/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Data statis contact CS
const DUMMY_CONTACTS = [
  { name: "Kak Nia", phone: "6282258689993", role: "Admin" },
  { name: "Kak Fani", phone: "6285774023474", role: "Admin" },
  { name: "Kak Fina", phone: "6281311778441", role: "Admin" },
];

const initialState = {
  contactCsData: null,
  loading: "idle",
  error: null,
};

export const fetchContactCs = createAsyncThunk(
  "contactCs/fetchContactCs",
  async (_, { rejectWithValue }) => {
    try {
      // Menggunakan domain webapps.lesprivatmasukptn.com untuk redirect WhatsApp
      // Anda bisa mengambil salah satu kontak secara default atau melakukan rotasi index
      const randomIndex = Math.floor(Math.random() * DUMMY_CONTACTS.length);
      const selectedContact = DUMMY_CONTACTS[randomIndex];

      // Format link CTA menggunakan domain webapps.lesprivatmasukptn.com / wa.me
      // Sesuai format standar: https://wa.me/[nomor]?text= atau melalui webapps domain jika ada endpoint-nya.
      // Di sini kita arahkan langsung ke wa.me dengan basis nomor dummy.
      const formattedData = {
        name: selectedContact.name,
        phone: selectedContact.phone,
        role: selectedContact.role,
        link_cta: `https://wa.me/${selectedContact.phone}?text=`,
      };

      // Mengembalikan array agar kompatibel dengan pengecekan Array.isArray di komponen
      return [formattedData];
    } catch (error) {
      return rejectWithValue("Failed to load static contact CS data");
    }
  },
);

const contactCsSlice = createSlice({
  name: "contactCs",
  initialState,
  reducers: {
    setContactCsData: (state, action) => {
      state.contactCsData = action.payload;
    },
    resetContactCs: (state) => {
      state.contactCsData = null;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactCs.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchContactCs.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.contactCsData = Array.isArray(action.payload)
          ? action.payload
          : action.payload
            ? [action.payload]
            : [];
        state.error = null;
      })
      .addCase(fetchContactCs.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export const { setContactCsData, resetContactCs } = contactCsSlice.actions;
export default contactCsSlice.reducer;

export const selectContactCsData = (state) => state.contactCs.contactCsData;
export const selectContactCsLoading = (state) => state.contactCs.loading;
export const selectContactCsError = (state) => state.contactCs.error;
