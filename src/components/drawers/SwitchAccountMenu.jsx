import { Drawer } from "antd";
import PropTypes from "prop-types";
import { useAccount } from "../../hooks/useAccount";

const SwitchAccountMenu = ({ props }) => {
  const { open, close, menuOptions } = props;
  const { onChangeAccount, defaultAccount } = useAccount();
  const { name: default_account } = defaultAccount;
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
        <div className="w-full flex flex-col gap-3.5">
          {menuOptions?.map(({ profile_img, name }, index) => {
            return (
              <div
                className="flex w-full items-center cursor-pointer"
                key={index}
                onClick={() => {
                  onChangeAccount({ profile_img, name });
                  close();
                }}
              >
                <div className="flex flex-1 gap-2.5 items-center">
                  <img
                    className="w-16 h-16 object-cover rounded-full"
                    src={profile_img}
                  />
                  <span className="font-medium text-md w-full">{name}</span>
                </div>
                {default_account === name ? (
                  <div className="flex w-4 h-4 border-[4px]  border-sky-500 rounded-full"></div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </Drawer>
  );
};

SwitchAccountMenu.propTypes = {
  props: PropTypes.object,
  open: PropTypes.bool,
  close: PropTypes.func,
  menuOptions: PropTypes.array,
};

export default SwitchAccountMenu;
