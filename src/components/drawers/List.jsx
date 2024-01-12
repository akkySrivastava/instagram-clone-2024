import PropTypes from "prop-types";
import { Drawer } from "antd";

function List({ props }) {
  const { open, close } = props;
  return (
    <Drawer
      placement="bottom"
      open={open}
      onClose={close}
      destroyOnClose
      height="100%"
      closeIcon={null}
      className="md:w-full max-w-[400px] rounded-t-lg"
    >
      Test data
    </Drawer>
  );
}

List.propTypes = {
  props: PropTypes.object,
  open: PropTypes.bool,
  close: PropTypes.func,
  menuOptions: PropTypes.array,
};

export default List;
