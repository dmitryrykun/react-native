import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import {AppRegistry} from 'react-native';

AppRegistry.registerComponent('RNTesterApp', () => RNTesterApp);

  
const date = new Date(Date.UTC(2020, 0, 2, 3, 45, 10, 30));
const num1 = 123456.789;
const num2 = 0.123;

const RNTesterApp = () => {
  return (
    <ScrollView contentContainerStyle={{marginTop: 20, marginLeft: 5, marginRight: 5}}>
      <Text>DateTimeFormat('en-US').format(date)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.DateTimeFormat('en-US').format(date)}</Text>
      <Text></Text>
      <Text>DateTimeFormat('en-GB').format(date)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.DateTimeFormat('en-GB').format(date)}</Text>
      <Text></Text>
      <Text>DateTimeFormat('de-DE').format(date)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.DateTimeFormat('de-DE').format(date)}</Text>
      <Text></Text>
      <Text>DateTimeFormat('en-US', timeStyle: 'long', timeZone: 'PST').format(date)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.DateTimeFormat('en-US', { timeStyle: 'long', timeZone: 'PST'}).format(date)}</Text>
      <Text></Text>
      <Text>DateTimeFormat('en-US', timeStyle: 'long', timeZone: 'EET').format(date)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.DateTimeFormat('en-US', { timeStyle: 'long', timeZone: 'EET'}).format(date)}</Text>
      <Text></Text>
      <Text>DateTimeFormat('en-GB', dateStyle: 'full', timeStyle: 'long').format(date)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date)}</Text>
      <Text></Text>
      <Text>DateTimeFormat('ko-KR', dateStyle: 'medium', timeStyle: 'medium').format(date)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'medium' }).format(date)}</Text>
      <Text></Text>
      <Text>DateTimeFormat('en-US').resolvedOptions().locale</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.DateTimeFormat('en-US').resolvedOptions().locale}</Text>
      <Text></Text>
      <Text>DateTimeFormat('zh-CN').resolvedOptions().locale</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.DateTimeFormat('zh-CN').resolvedOptions().locale}</Text>
      <Text></Text>
      <Text>DateTimeFormat('en-US', timeZone: 'SGT').resolvedOptions().timeZone</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.DateTimeFormat('en-US', { timeZone: 'SGT'}).resolvedOptions().timeZone}</Text>
      <Text></Text>
      <Text>DateTimeFormat('en-US').formatToParts(date)</Text>
      <Text style={{fontWeight: 'bold'}}>{JSON.stringify(new Intl.DateTimeFormat('en-US').formatToParts(date))}</Text>
      <Text></Text>
      <Text>DateTimeFormat('en-GB').formatToParts(date)</Text>
      <Text style={{fontWeight: 'bold'}}>{JSON.stringify(new Intl.DateTimeFormat('en-GB').formatToParts(date))}</Text>
      <Text></Text>
      <Text>NumberFormat().format()</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat().format()}</Text>
      <Text></Text>
      <Text>NumberFormat('pl').format()</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat('pl').format()}</Text>
      <Text></Text>
      <Text>NumberFormat(['pl']).format()</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['pl']).format()}</Text>
      <Text></Text>
      <Text>NumberFormat([]).format()</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat([]).format()}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], undefined).format(0)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], undefined).format(0)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], undefined).format(-10)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], undefined).format(-10)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], undefined).format(25324234235)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], undefined).format(25324234235)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], undefined).format(num1)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], undefined).format(num1)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], style: 'percent').format(num2)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], {style: 'percent'}).format(num2)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], style: 'currency', currency: 'EUR').format(num1)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], {style: 'currency', currency: 'EUR'}).format(num1)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], style: 'currency', currency: 'EUR', currencyDisplay: 'code').format(num1)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], {style: 'currency', currency: 'EUR', currencyDisplay: 'code'}).format(num1)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], useGrouping: true).format(num1)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], {useGrouping: true}).format(num1)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], useGrouping: false).format(num1)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], {useGrouping: false}).format(num1)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], minimumIntegerDigits: 2).format(num2)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], {minimumIntegerDigits: 2}).format(num2)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], minimumFractionDigits: 6).format(num2)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], {minimumFractionDigits: 6}).format(num2)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], maximumFractionDigits: 1).format(num2)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], {maximumFractionDigits: 1}).format(num2)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], maximumSignificantDigits: 3).format(num1)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], {maximumSignificantDigits: 3}).format(num1)}</Text>
      <Text></Text>
      <Text>NumberFormat(['de'], maximumSignificantDigits: 5).format(num1)</Text>
      <Text style={{fontWeight: 'bold'}}>{new Intl.NumberFormat(['de'], {maximumSignificantDigits: 5}).format(num1)}</Text>
    </ScrollView>
  );
}

export default RNTesterApp;