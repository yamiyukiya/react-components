import React from 'react';
import Space from 'components/Space';
import Wrapper from 'components/Wrapper';
import Part from 'components/Part';
import Description from 'components/Description';
import useVirtual from 'hooks/useVirtual';

const colors = ['#8868ff', '#24cdd0', '#ffc84e', '#fe657f', '#748cfd'];

export default () => {
  const [list1, containerProps1, wrapperProps1] = useVirtual({
    total: 9996,
    height: 280,
    itemHeight: 54,
  });
  const [list, containerProps, wrapperProps] = useVirtual({
    total: 9996,
    height: 280,
    itemHeight: i => (i % 2 === 0 ? 86 : 54),
  });
  return (
    <Wrapper label="useVirtual" time="2020-08-21">
      <Part>Item 定高</Part>
      <div {...containerProps1}>
        <div {...wrapperProps1}>
          {list1.map(({ style, index }) => (
            <div
              style={{
                ...style,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: colors[index % colors.length],
                borderBottom: '1px solid #e8e8e8',
              }}
              key={index}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <Space />
      <Part>Item 不定高</Part>
      <div {...containerProps}>
        <div {...wrapperProps}>
          {list.map(({ style, index }) => (
            <div
              style={{
                ...style,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: colors[index % colors.length],
                borderBottom: '1px solid #e8e8e8',
              }}
              key={index}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <Description>
        useVirtual，无限长列表，支持子项不定高度，解决列表数据量过大，DOM渲染过多的卡顿问题。
      </Description>
    </Wrapper>
  );
};
