import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import SelectOption from './SelectOption';

const FundingList = ({ fundingItems, sortByRecent, sortByLikes }) => {
  const sort = value => {
    if (value === 'date') {
      sortByRecent();
    } else if (value === 'like') {
      sortByLikes();
    }
  };
  return (
    <ItemWrapper>
      <SelectionWrapper>
        <SelectOption sort={sort} />
      </SelectionWrapper>
      {fundingItems.map(
        ({
          id,
          thumbnail,
          category,
          title,
          images,
          summary,
          target_amount,
          total_amount,
          remain_days,
          date,
          like_count,
        }) => {
          return (
            <Item
              key={id}
              id={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              summary={summary}
              images={images}
              target_amount={target_amount}
              total_amount={total_amount}
              remain_days={remain_days}
              date={date}
              like_count={like_count}
            />
          );
        }
      )}
    </ItemWrapper>
  );
};

export default FundingList;

const ItemWrapper = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  font-family: sans-serif;
  font-size: 14px;
`;

const SelectionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 7px;
`;
