function checarAguaQuente(ultimaLimpeza, cliente) {
  const [h, m] = ultimaLimpeza.split(":").map(Number);
  const totalMin = h * 60 + m;
  const minutosAtras = 10;
  if (minutosAtras < 10) {
    return `[${cliente}] espere mais ${10 - minutosAtras} min`;
  }
  const novoH = Math.floor((totalMin + minutosAtras) / 60) % 24;
  const novoM = (totalMin + minutosAtras) % 60;
  const hora = String(novoH).padStart(2, "0");
  const min = String(novoM).padStart(2, "0");
  return `[${cliente}] pode usar o chuveiro às ${hora}:${min}`;
}

console.log(checarAguaQuente("08:00", "Ana"));