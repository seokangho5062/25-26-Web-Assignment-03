/* 재사용 styled 컴포넌트 */

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #f6f7fb;
    --text: #2b3443;
    --muted: #7a869a;
    --line: #e9ecf1;
    --primary: #6a89ff;
    --primaryHover: #5576ff;
    --danger: #f15959;
    --dangerHover: #e24a4a;
    --focus: rgba(106, 137, 255, 0.15);
  }

  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  }
`;

export const AppWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px 80px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
`;

export const Box = styled.section`
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
`;

export const FormGrid = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  & .full {
    grid-column: 1 / -1;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  color: #55627a;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d7dce3;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--focus);
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 32px 0 12px;
  border: 1px solid #d7dce3;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  appearance: none;
  background: #fff
    url("data:image/svg+xml;charset=UTF-8,%3Csvg width='10' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2355627a'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 10px 6px;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--focus);
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const Button = styled.button`
  appearance: none;
  border: 0;
  border-radius: 10px;
  padding: 10px 16px;
  background: var(--primary);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.02s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-shadow: 0 8px 16px rgba(106, 137, 255, 0.25);

  &:hover {
    background: var(--primaryHover);
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const DangerButton = styled(Button)`
  background: var(--danger);
  box-shadow: 0 8px 16px rgba(241, 89, 89, 0.25);

  &:hover {
    background: var(--dangerHover);
  }
`;

export const ListGrid = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
`;

export const Card = styled.article`
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.03);
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`;

export const KV = styled.div`
  font-size: 13px;
  color: var(--text);
  .k {
    color: var(--muted);
    margin-right: 6px;
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
`;

export const Empty = styled.div`
  text-align: center;
  color: #7f8aa5;
  padding: 18px 0;
  font-size: 14px;
`;
