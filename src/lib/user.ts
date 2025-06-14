import apiClient from "./api-client";

/**
 * 관리자 - 사용자 목록 조회
 * @param page 페이지 번호 (0부터 시작)
 * @param size 한 페이지에 가져올 사용자 수
 * @returns {Promise<any>} 사용자 목록 및 페이징 정보
 * @example
 * const users = await getUsers(0, 10);
 */
export async function getUsers(page: number, size: number) {
  const response = await apiClient.get(
    `/admin/users?page=${page}&size=${size}`
  );
  return response.data;
}

/**
 * 사용자 정보 수정
 * @param userData 수정할 사용자 정보
 * @returns {Promise<any>} 수정 결과
 */
export async function updateUser(userData: {
  userId: string;
  name: string;
  email: string;
  phoneNumber: string;
  birthday: string;
}) {
  const response = await apiClient.patch("/users", userData);
  return response.data;
}