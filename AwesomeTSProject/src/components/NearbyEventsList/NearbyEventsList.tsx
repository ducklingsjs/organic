import React, {FC} from 'react';
import {Pressable, ScrollView} from 'native-base';
import {useNavigation} from '@react-navigation/core';

import {Event} from '../../resources/Event';
import {EventCard} from '../cards/EventCard';

interface INearbyEventsListProps {
  events: Array<Event>;
}

export const NearbyEventsList: FC<INearbyEventsListProps> = ({events}) => {
  const navigation = useNavigation();

  const handleEventCardPress = (name: string, id: string) => {
    navigation.navigate('EventScreen', {
      title: name,
      eventId: id,
    });
  };

  return (
    <ScrollView
      overScrollMode="never"
      alwaysBounceHorizontal={false}
      showsHorizontalScrollIndicator={false}
      bounces
      decelerationRate="fast"
      directionalLockEnabled
      horizontal
      contentContainerStyle={{
        paddingLeft: 16,
        paddingRight: 16,
      }}
      mt={4}
      h="240px">
      {events?.map((event: Event) => (
        <Pressable
          _pressed={{opacity: 0.8}}
          onPress={() => handleEventCardPress(event.name, event.id)}>
          <EventCard
            key={event.id}
            {...event}
            shadow={4}
            rounded={16}
            bgColor="white"
            ml="12px"
            mr="12px"
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};
