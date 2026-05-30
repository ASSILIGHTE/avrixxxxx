## Edit plan (Contact hanya Discord)

### Information Gathered
- `src/App.jsx`: section `Contact()` masih menampilkan 4 link: Email (`mailto:`), GitHub, LinkedIn, Instagram.
- `src/data/portfolio.js`: `profile` memiliki `email`, `github`, `linkedin`, `instagram` (masih placeholder `"#"`). Belum ada `discord`.

### Plan
1. Update `src/data/portfolio.js`: tambahkan field `discord` (link invite / username / url) ke `profile`.
2. Update `src/App.jsx` (function `Contact()`):
   - Hapus link email/github/linkedin/instagram.
   - Ganti dengan 1 CTA “Contact via Discord” yang mengarah ke `profile.discord`.
   - Pastikan style tetap konsisten (pakai kelas yang ada seperti `btn primary full` atau link badge yang sesuai).
3. (Opsional) Perbarui teks paragraf contact agar sesuai “Discord only”.
4. Build/test untuk memastikan tidak ada error.

### Dependent Files to be edited
- `src/data/portfolio.js`
- `src/App.jsx`
- `TODO.md` (update status)

### Followup steps
- Jalankan `npm run build` (atau `npm run dev`) untuk validasi.

<ask_followup_question>
Discord yang dipakai mau yang mana: link invite (URL panjang), atau username (mis. `username`), atau `discord://`? Kirimkan URL Discord yang ingin dipakai (mis. https://discord.gg/xxxxx atau https://discord.com/users/xxxxx).
</ask_followup_question>

