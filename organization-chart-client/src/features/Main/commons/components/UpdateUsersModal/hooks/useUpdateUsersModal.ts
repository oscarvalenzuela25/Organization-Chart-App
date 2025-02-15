import { useEffect, useState } from 'react';
import useGetUsers from '../insfrastructure/hooks/useGetUsers';
import { Candidate, Job } from '../../../types/jobs';
import useUpdateUsers from '../insfrastructure/hooks/useUpdateUsers';

const useUpdateUsersModal = (
  jobSelected: Job,
  handleCloseModal: VoidFunction
) => {
  const [userIdSelected, setUserIdSelected] = useState(0);
  const [listUsers, setListUsers] = useState<Array<Candidate>>([]);
  const [usersSelected, setUsersSelected] = useState<Array<Candidate>>(
    jobSelected.candidates
  );
  const {
    users: rawUsers,
    getUsersIsLoading,
    getUsersIsFetching,
    getUsersIsSuccess,
  } = useGetUsers();
  const { handleUpdateUsers, handleUpdateUsersIsLoading } = useUpdateUsers();

  useEffect(() => {
    if (getUsersIsSuccess) {
      const users = filterUsers(rawUsers, jobSelected.candidates);
      const [firstUser] = users;
      setListUsers(users);
      setUserIdSelected(firstUser?.id || 0);
    }
  }, [rawUsers, getUsersIsSuccess, jobSelected.candidates]);

  const filterUsers = (
    listUsers: Array<Candidate>,
    candidates: Array<Candidate>
  ) => {
    const candidateIds = new Set(candidates.map(candidate => candidate.id));
    return listUsers.filter(user => !candidateIds.has(user.id));
  };

  const handleSetUserIdSelected = (userId: number) => {
    setUserIdSelected(userId);
  };

  const handleSelectUserInInput = () => {
    const getUser = listUsers.find(user => user.id === userIdSelected);
    if (getUser) {
      const newUsersSelected = [...usersSelected, getUser];
      setUsersSelected(newUsersSelected);
    }

    const newListUsers = listUsers.filter(user => user.id !== userIdSelected);
    setUserIdSelected(newListUsers.length ? newListUsers[0].id : 0);
    setListUsers(newListUsers);
  };

  const handleRemoveUserInList = (userId: number) => {
    const getUser = usersSelected.find(user => user.id === userId);
    if (getUser) {
      const newUsersSelected = usersSelected.filter(user => user.id !== userId);
      setUsersSelected(newUsersSelected);

      const newListUsers = [...listUsers, getUser];
      setUserIdSelected(newListUsers.length ? newListUsers[0].id : 0);
      setListUsers(newListUsers);
    }
  };

  const handleSubmitModal = () => {
    handleUpdateUsers({
      jobId: jobSelected.id,
      payload: usersSelected,
      callback: () => {
        handleCloseModal();
      },
    });
  };

  const validation = {
    getUsersIsLoading: getUsersIsLoading || getUsersIsFetching,
    updateUsersIsLoading: handleUpdateUsersIsLoading,
    modalLoading:
      getUsersIsLoading || getUsersIsFetching || handleUpdateUsersIsLoading,
  };

  return {
    userIdSelected,
    listUsers,
    usersSelected,
    getUsersIsLoading,
    getUsersIsFetching,
    validation,
    handleSetUserIdSelected,
    handleSelectUserInInput,
    handleRemoveUserInList,
    handleSubmitModal,
  };
};

export default useUpdateUsersModal;
