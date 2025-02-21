import { FC, PropsWithChildren, Ref } from 'react';

type Props = { ref?: Ref<HTMLDivElement> } & PropsWithChildren;

const BaseLayout: FC<Props> = ({ children, ref }) => {
  return (
    <div
      className="flex flex-col m-0 p-0 w-full min-h-screen bg-gray-custom relative"
      ref={ref}
    >
      {children}
    </div>
  );
};

export default BaseLayout;
