import React, { useEffect } from 'react';

type Props = {
  children: JSX.Element,
  cancelButtonText?: string,
  handleCancelButtonClick?: () => any,
  approveButtonText?: string,
  handleApproveButtonClick?: () => any,
};

const Modal = ({
  children,
  approveButtonText,
  cancelButtonText,
  handleApproveButtonClick,
  handleCancelButtonClick,
}: Props) => {
  useEffect(() => {
    //Please tell theres a  better way of doing this
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-secondary rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
            X
          </button>
          <div className="p-6 text-center">
            <div className="text-white">{children}</div>
            {approveButtonText && (
              <button
                onClick={handleApproveButtonClick}
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                {approveButtonText}
              </button>
            )}
            {cancelButtonText && (
              <button
                onClick={handleCancelButtonClick}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                {cancelButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
