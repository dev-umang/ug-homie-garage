export type Brand = Partial<{
  id: string;
  name: string;
  logo: string;
}>;

export type Vehicle = {
  id: string;
  model: string;
  garageKey: string;
  garageName?: string;
  name?: string; // Pet name
  thumbnail: string;
  brand: Brand;
  onRoadPrice: number;
  paidAmount: number;
  pastOwners?: number;
  numberplate: string;
};
