import { FC, PropsWithChildren } from 'react';

type Props = {
  isOpen: boolean;
  handleCloseDrawer: VoidFunction;
} & PropsWithChildren;

const BaseDrawer: FC<Props> = ({ isOpen, children, handleCloseDrawer }) => {
  return (
    <div className="drawer z-9999">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={() => undefined}
      />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={handleCloseDrawer}
        />
        {children}
      </div>
    </div>
  );
};

export default BaseDrawer;
