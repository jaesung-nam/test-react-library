import React from 'react';

export type MyLibProps = {
  value: string;
  onChange: (value: string) => void;
};

export const MyComp: React.FC<MyLibProps> = (props) => {
  const { value, onChange } = props;
  return (
    <div>
      <div>my lib</div>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export const MyComp2: React.FC<MyLibProps> = (props) => {
  const { value, onChange } = props;
  return (
    <div>
      <div>트리쉐이킹 테스트my lib</div>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export const MyComp3: React.FC<MyLibProps> = (props) => {
  const aa = props.value;
  return <div>eqwewqewqeqw</div>;
};
