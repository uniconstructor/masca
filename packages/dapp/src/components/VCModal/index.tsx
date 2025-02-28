import { useRouter } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import { VerifiableCredential } from '@veramo/core';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

interface VCModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  vc: VerifiableCredential;
}

function VCModal({ isOpen, setOpen, vc }: VCModalProps) {
  const router = useRouter();

  return (
    <Modal isOpen={isOpen} setOpen={setOpen}>
      <Dialog.Title
        as="h3"
        className="text-h3 font-ubuntu dark:text-navy-blue-50 font-medium leading-6 text-gray-900"
      >
        Verifiable Credential
      </Dialog.Title>
      <div className="w-[48rem] max-w-full">
        <div className="mt-5">
          <p className="text-md dark:text-navy-blue-200 text-gray-600">
            Here is a credential generated from the payload.
          </p>
        </div>
        <div className="mt-5">
          <div className="dark:bg-navy-blue-300 dark:border-navy-blue-400 group relative z-0 rounded-2xl border border-gray-200 bg-gray-100 pr-2 pt-1">
            <textarea
              className="group-hover:scrollbar-thumb-orange-300 dark:text-navy-blue-800 dark:bg-navy-blue-300 scrollbar-thin scrollbar-thumb-orange-300/0 scrollbar-thumb-rounded-full font-jetbrains-mono min-h-[60vh] w-full resize-none rounded-2xl bg-gray-100 p-2 text-gray-700 focus:outline-none"
              disabled
              value={JSON.stringify(vc, null, 4)}
            />

            <button
              onClick={() => {
                navigator.clipboard
                  .writeText(JSON.stringify(vc, null, 4))
                  .catch(() => {});
              }}
              className="animated-transition absolute bottom-3 right-6 rounded-full bg-gray-500 p-1 text-gray-900 shadow-md hover:bg-gray-400 hover:text-gray-700"
            >
              <DocumentDuplicateIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-end">
          <div className="ml-2 mt-4">
            <Button
              onClick={async () => {
                setOpen(false);
                router.push('/app');
              }}
              variant="done"
              size="sm"
            >
              Done
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default VCModal;
