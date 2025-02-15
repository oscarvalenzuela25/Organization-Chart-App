import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col m-0 p-0 w-full min-h-screen bg-gray-custom">
      {children}
    </div>
  );
};

export default BaseLayout;
