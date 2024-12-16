function pesanWhatsApp(produk) {
  const nomorWA = "081282264557";
  const pesan = `Halo, saya ingin memesan layanan ${produk}.`;
  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}