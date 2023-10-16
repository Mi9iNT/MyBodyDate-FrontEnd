import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import {PERMISSIONS, check, request} from 'react-native-permissions';
import RNFS from 'react-native-fs';

import PropTypes from 'prop-types';

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09);

export const ScreenTest = ({navigation}) => {
  const [recording, setRecording] = useState(false);
  const [permissionAudio, setPermissionAudio] = useState(null);
  const [result, setResult] = useState(null);

  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  console.log(
    // 'recordTime : ',
    // recordTime,
    ' playTime : ',
    playTime,
    ' duration : ',
    duration,
  );

  useEffect(() => {
    const checkPermissions = async () => {
      const permissions = [PERMISSIONS.ANDROID.RECORD_AUDIO];

      const statuses = await request(permissions[0]);

      setPermissionAudio(statuses);

      if (statuses === 'granted') {
        setPermissionAudio(true);
      }
    };

    checkPermissions();
  }, []);

  const onStartRecord = async () => {
    setRecording(true);
    const audioDirectory = `${RNFS.ExternalDirectoryPath}/Music`;
    const path = `${audioDirectory}/empreinteVocal.mp3`;

    // si le répertoire existe, sinon le créer
    const exists = await RNFS.exists(audioDirectory);
    if (!exists) {
      await RNFS.mkdir(audioDirectory);
    }
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.MP3,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.mp3,
    };
    console.log('audioSet', audioSet);
    const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    audioRecorderPlayer.addRecordBackListener(e => {
      if (typeof e.currentPosition === 'number' && e.currentPosition > 0) {
        setRecordSecs(e.currentPosition);
        setRecordTime(
          audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        );
      }
    });
    console.log(`uri: ${uri}`);
    // Arrête l'enregistrement après 30 secondes
    setTimeout(() => {
      onStopRecord();
    }, 30000);
  };

  const onStopRecord = async () => {
    setRecording(false);
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    console.log(result);
  };

  const onStartPlay = async () => {
    console.log('Player Playing . . .');
    const path = `${RNFS.ExternalDirectoryPath}/Music/empreinteVocal.mp3`;

    // Vérifiez si le fichier existe
    const exists = await RNFS.exists(path);
    if (!exists) {
      console.log("Le fichier audio n'existe pas");
      return;
    }

    const msg = await audioRecorderPlayer.startPlayer(path);
    console.log(msg);
    audioRecorderPlayer.setVolume(1.0);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (typeof e.currentPosition === 'number') {
        setCurrentPositionSec(e.currentPosition);
        setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
        if (e.currentPosition === e.duration) {
          console.log('finished');
          audioRecorderPlayer.stopPlayer();
          setPlayTime('00:00:00');
        }
      }

      if (typeof e.duration === 'number' && e.duration > 0) {
        setCurrentDurationSec(e.duration);
        setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      }
      if (e.currentPosition === e.duration) {
        console.log('finished');
        audioRecorderPlayer.stopPlayer();
        setPlayTime('00:00:00');
      }
    });
  };

  const onPausePlay = async () => {
    console.log('Player Pausing . . .');
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = () => {
    setPlayTime('00:00:00');
    console.log('Player Stopped');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  return (
    <View
      style={{
        flex: 1,
        width: 200,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        backgroundColor: 'green',
      }}>
      <Text>Test Recorder</Text>
      <Text>{recordTime}</Text>
      {recording ? (
        <TouchableOpacity onPress={onStopRecord}>
          <Text>STOP</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onStartRecord}>
          <Text>START</Text>
        </TouchableOpacity>
      )}
      <Text>
        {playTime} / {duration}
      </Text>
      <View style={{backgroundColor:'red', height:30, width:'100%', alignSelf:'center', justifyContent:'flex-start', alignItems:'center', }}>
        <View style={{backgroundColor:'white', height: 10, width: playTime / recordTime * 100+'%' }} />
      </View>
      <TouchableOpacity onPress={onStartPlay}>
        <Text>PLAY</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPausePlay}>
        <Text>PAUSE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onStopPlay}>
        <Text>STOP</Text>
      </TouchableOpacity>
    </View>
  );
};

ScreenTest.propTypes = {
  navigation: PropTypes.object.isRequired,
};
