import React from 'react';
import useVideoContext from '../../hooks/useParticipants/useParticipants';
import Participant from '../Participant/Participant';

export default function StatsOverlay() {
  const { room } = useVideoContext();
  const [participantStatsReport, setParticipantStatsReport] = useState<Participant>();
}
