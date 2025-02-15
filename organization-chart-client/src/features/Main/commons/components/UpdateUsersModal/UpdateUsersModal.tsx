import { FC } from 'react';
import { Job } from '../../types/jobs';
import BaseModal from '../../../../../components/BaseModal';
import Button from '../../../../../components/Button';
import IconButton from '../../../../../components/IconButton';
import TrashIcon from '../../../../../icons/TrashIcon';
import SaveIcon from '../../../../../icons/SaveIcon';
import useUpdateUsersModal from './hooks/useUpdateUsersModal';

type Props = {
  isOpen: boolean;
  jobSelected: Job;
  handleCloseModal: VoidFunction;
};
const UpdateUsersModal: FC<Props> = ({
  isOpen,
  jobSelected,
  handleCloseModal,
}) => {
  const {
    userIdSelected,
    listUsers,
    usersSelected,
    validation,
    handleSetUserIdSelected,
    handleSelectUserInInput,
    handleRemoveUserInList,
    handleSubmitModal,
  } = useUpdateUsersModal(jobSelected, handleCloseModal);

  return (
    <BaseModal
      isOpen={isOpen}
      title="Update users"
      handleCloseModal={handleCloseModal}
      width={500}
      isLoading={validation.modalLoading}
    >
      <label
        htmlFor="users"
        className="text-[12px] font-medium text-base-custom/80 mt-3"
      >
        Users
      </label>

      {listUsers.length === 0 ? (
        <p>There are no more users to display</p>
      ) : (
        <>
          <select
            id="users"
            value={userIdSelected}
            className="w-full px-3 py-3 rounded-xl border-2 outline-none border-black-translucent-custom focus:border-blue-custom"
            onChange={e => handleSetUserIdSelected(Number(e.target.value))}
            disabled={validation.modalLoading}
          >
            {listUsers.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <div className="flex w-full justify-end mt-2">
            <Button
              variant="primary"
              onClick={handleSelectUserInInput}
              disabled={validation.modalLoading}
            >
              Add
            </Button>
          </div>
        </>
      )}

      <div className="flex flex-col mt-10 gap-2 w-full max-h-[282px] overflow-y-auto scrollbar-hide">
        {usersSelected.map(user => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-white-custom px-4 py-2 rounded-lg border border-black-translucent-custom"
          >
            <p className="text-base-custom">{user.name}</p>
            <IconButton
              onClick={() => handleRemoveUserInList(user.id)}
              disabled={validation.modalLoading}
            >
              <TrashIcon className="fill-red-custom" />
            </IconButton>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center mt-4">
        <Button
          variant="primary"
          endIcon={<SaveIcon />}
          onClick={handleSubmitModal}
          isLoading={validation.modalLoading}
        >
          Save
        </Button>
      </div>
    </BaseModal>
  );
};

export default UpdateUsersModal;
