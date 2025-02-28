import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { useTableStore } from '@/stores';
import { CheckBox } from './CheckBox';

const DataStoreNames = {
  snap: 'Snap',
  ceramic: 'Ceramic',
};

export const DataStores = () => {
  const t = useTranslations('FilterPopover');
  const [open, setOpen] = useState(false);
  const { dataStores, setDataStores } = useTableStore((state) => ({
    dataStores: state.dataStores,
    setDataStores: state.setDataStores,
  }));

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="dark:text-navy-blue-100 my-1 ml-2 mt-4 flex items-center gap-x-2 text-gray-700">
          <ChevronRightIcon
            className={clsx(
              'animated-transition h-5 w-5',
              `${open ? 'rotate-90' : ''}`
            )}
          />
          {t('datastore')}
        </div>
      </button>
      {open && (
        <div className="dark:bg-navy-blue-500/40 bg-[#FFF8F9] p-2">
          {dataStores.map((dataStore) => (
            <CheckBox
              key={dataStore.dataStore}
              selected={dataStore.selected}
              setSelected={(selected) => {
                const newDataStores = dataStores.map((ds) => {
                  if (ds.dataStore === dataStore.dataStore) {
                    return {
                      ...dataStore,
                      selected,
                    };
                  }
                  return ds;
                });
                setDataStores(newDataStores);
              }}
            >
              {DataStoreNames[dataStore.dataStore]}
            </CheckBox>
          ))}
        </div>
      )}
    </div>
  );
};
