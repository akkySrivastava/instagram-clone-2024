import { Drawer } from "antd";
import PropTypes from "prop-types";

const DashboardMenu = ({ props }) => {
  const { open, close, menuOptions } = props;
  return (
    <Drawer
      placement="bottom"
      open={open}
      onClose={close}
      destroyOnClose
      height="auto"
      closeIcon={null}
      className="md:w-full max-w-[400px] rounded-t-lg"
    >
      <div className="flex h-full w-full flex-col gap-5">
        <div onClick={close} className="flex items-start justify-center">
          <span className="h-1.5 rounded-full w-10 bg-gray-500"></span>
        </div>
        <div className="w-full flex flex-col gap-5">
          {menuOptions?.map(({ icon: Icon, isBadge, text }, index) => {
            return (
              <div
                className="flex w-full items-center cursor-pointer"
                key={index}
              >
                <div className="flex flex-1 gap-2.5 items-center">
                  <span>{<Icon size={24} />}</span>
                  <span className="font-medium text-md w-full">{text}</span>
                </div>
                {isBadge ? (
                  <div className="flex bg-sky-500 rounded-full px-1.5 py-1">
                    <span className="text-[10px] text-white">NEW</span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </Drawer>
  );
};

DashboardMenu.propTypes = {
  props: PropTypes.object,
  open: PropTypes.bool,
  close: PropTypes.func,
  menuOptions: PropTypes.array,
};

export default DashboardMenu;
