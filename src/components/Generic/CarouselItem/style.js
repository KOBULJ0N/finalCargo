import styled from 'styled-components';
import { ReactComponent as instagram } from '../../../assets/Icons/instagram.svg';
import { ReactComponent as facebook } from '../../../assets/Icons/facebook2.svg';
import { ReactComponent as google } from '../../../assets/Icons/google.svg';

export const Container = styled.div`
  width: 380px;
  height: 250px;
  display: flex;
  background-color: #fff;
  padding: 20px 20px;
  border-radius: 30px;
  align-items: center;
  /* justify-content: space-between; */
  background-color: #fff;
`;

export const Instagram = styled(instagram)`
  width: 27px;
  height: 27px;
`;
export const Facebook = styled(facebook)`
  width: 27px;
  height: 27px;
`;
export const Google = styled(google)`
  path {
    fill: #222221;
  }
  width: 27px;
  height: 27px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(90deg, #47abd8 0%, #0071bc 100%);
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
`;

Right.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16.559px;
  line-height: 25px;
  width: 200px;
`;

Right.Text = styled.div`
  font-style: normal;
  width: 235px;
  font-size: 15.559px;
  line-height: 25px;
  color: #000000;
  text-align: left;
  margin: 9px 0;
`;
