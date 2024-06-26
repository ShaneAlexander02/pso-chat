Deskripsi Proyek
Pada pengerjaan proyek final kali ini, kami membangun aplikasi berupa messenger webapp real-time yang handal dan mudah digunakan. Messenger webapp ini dirancang untuk memenuhi kebutuhan komunikasi instan dan kolaboratif secara  real-time bagi individu.  webapp ini dirancang untuk memberikan pengalaman pengguna yang mulus dan intuitif. Dengan mengadopsi framework Next.js dan bahasa pemrograman TypeScript, aplikasi ini akan menghadirkan performa yang optimal, skalabilitas yang tinggi, dan kemudahan pengembangan. Aplikasi ini akan menawarkan fitur utama seperti pengiriman pesan instan, penambahan teman, sinkronisasi akun dengan akun google, dan pengaturan tema tampilan app, sehingga menjadi platform komunikasi yang ideal untuk berbagai kebutuhan.

Secara keseluruhan, proses arsitektur DevOps kami dapat digambarkan sebagai berikut.
![image](https://github.com/ShaneAlexander02/pso-chat/assets/126583044/44cceed6-8153-4f48-8bcb-842f5b2eda9c)

1. Pembuatan Version control setup dan template Next.js
Pembuatan repo dan juga template next.js sebagai kanvas untuk kode
![image](https://github.com/ShaneAlexander02/pso-chat/assets/126583044/44ead713-e4b8-49a7-923d-8406902e4261)

2. Konfigurasi CI (Continuous Integration)
Dalam proses ini, kami melakukan keseluruhan proses pipeline di dalam Github Action yang terdapat di .github/workflow/terraform.yml
![image](https://github.com/ShaneAlexander02/pso-chat/assets/126583044/719a3620-029c-4d6c-ab7c-6a0494ac9bfe)
![image](https://github.com/ShaneAlexander02/pso-chat/assets/126583044/13d00b0e-71e6-4255-afc8-ddb6486f7e45)

3. Konfigurasi Testing
Dalam proses ini, kami membuat proses testing terkait kode dengan JEST yang dapat dilihat di folder __test__. kode testing yang digunakan untuk memastin redirect sudah tepat untuk user yan teloh login.
![image](https://github.com/ShaneAlexander02/pso-chat/assets/126583044/bc343345-2a55-4232-86a3-c693a6b33643)


5. Dalam proses kontainerisasi kode, kami menggunakan DockerHub untuk hal tersebut. DockerHub merupakan alat yang berguna untuk membungkus seluruh kode yang dibutuhkan sehingga dapat dikirim ke alat deployment kami, yaitu AWS.
![image](https://github.com/ShaneAlexander02/pso-chat/assets/126583044/d06cdf16-0841-4e40-a620-54dd8075fb2f)

6. Setelah itu, kami membuat instance menggunakan terraform sebagai IaC dengan membuat VPC dengan security group yang sesuai, membuat sshkey unik setiap run, dan menyamakan settingan. Output dari tahap ini yaitu suatu sshkey yang dapat ditarik saat ingin push docker ke instance tersebut dan juga unique IP.

7. Tahap terakhir yaitu menggunakan github action kami untuk mendorong docker ke instance yang baru dibuat. Lalu melakukan DAST dengan Soos serta monitoring dengan cloudwatch.
