import { type QueryCredentialsRequestResult } from '@blockchain-lab-um/masca-connector';
import { ColumnFiltersState } from '@tanstack/react-table';
import { create } from 'zustand';

interface TableStore {
  globalFilter: string;
  columnFilters: ColumnFiltersState;
  selectedVCs: QueryCredentialsRequestResult[];
  cardView: boolean;

  setGlobalFilter: (globalFilter: string) => void;
  setColumnFilters: (columnFilters: ColumnFiltersState) => void;
  setSelectedVCs: (selectedVCs: QueryCredentialsRequestResult[]) => void;
  setCardView: (view: boolean) => void;
}

export const tableStoreInitialState = {
  globalFilter: '',
  columnFilters: [{ id: 'data_store', value: ['snap'] }],
  selectedVCs: [],
  cardView: true,
};

export const useTableStore = create<TableStore>()((set) => ({
  ...tableStoreInitialState,

  setGlobalFilter: (globalFilter: string) => set({ globalFilter }),
  setColumnFilters: (columnFilters: ColumnFiltersState) =>
    set({ columnFilters }),
  setCardView: (cardView: boolean) => set({ cardView }),
  setSelectedVCs: (selectedVCs: QueryCredentialsRequestResult[]) =>
    set({ selectedVCs }),
}));
