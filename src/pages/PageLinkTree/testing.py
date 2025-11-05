def segitiga_pascal(n):
    segitiga = [None] * n
    
    for baris in range(n):
        baris_sekarang = [0] * (baris + 1)
        baris_sekarang[0] = 1
        baris_sekarang[baris] = 1

        if baris > 1:
            baris_sebelumnya = segitiga[baris - 1]
            for i in range(1, baris):
                elemen_baru = baris_sebelumnya[i-1] + baris_sebelumnya[i]
                baris_sekarang[i] = elemen_baru
        
        segitiga[baris] = baris_sekarang
        print(baris_sekarang)

# Panggil fungsi tanpa perlu menangkap nilainya
segitiga_pascal(15)
