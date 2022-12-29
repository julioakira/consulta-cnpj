class Utils {
  GetBaseCNPJ(cnpj: string): string {
    return cnpj.slice(0, 8);
  }
}

export default new Utils();
