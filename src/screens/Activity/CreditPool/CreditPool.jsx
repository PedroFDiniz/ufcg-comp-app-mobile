import { View, Alert, Animated } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { NativeBaseProvider, Select, Text } from "native-base";
import { useFocusEffect } from '@react-navigation/native';
import ProgressBar from 'react-native-progress/Bar';

import { fetchActivitiesMetrics } from "../../../services/ActivityService";
import { useAuth } from "../../../context/AuthContext";

const CreditPoolScreen = () => {
    const { user } = useAuth()
    const [DBActMetricsInfo, setDBActMetricsInfo] = useState([]);
    const [activityMetrics, setActivityMetrics] = useState(null);
    const [progress, setProgress] = useState(0);
    const [poolValue, setPoolValue] = useState(0)
    const [poolLimit, setPoolLimit] = useState(0)

    const clearData = () => {
        /* Clearing the screen */
        setActivityMetrics(null);
        setProgress(null);
        setPoolValue(null);
        setPoolLimit(null);
    };

    useFocusEffect(
        useCallback(() => {
            clearData();
        }, [])
    );

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchActivitiesMetrics();
                setDBActMetricsInfo(response.data.metrics_info);
            } catch (error) {
                console.error(error)
            }
        }
        loadData();
    }, []);

    const handleSetActivityKind = async (activityKind) => {
        setIsLoading(true);
        const selectedActMetrics = DBActMetricsInfo.find(a => a.kind === activityKind);
        try {
            const response = await fetchActivityKindHours(selectedActMetrics.kind, user.email);
            userMetrics = response.data;
            const actualPoolValue = selectedActMetrics.hours_per_credit - userMetrics['hours until next credit'];
            setPoolValue(actualPoolValue);
            setPoolLimit(selectedActMetrics.hours_per_credit);
            setProgress(actualPoolValue/selectedActMetrics.hours_per_credit);
        } catch (error) { console.error(error); }
        setActivityMetrics(selectedActMetrics);
    };

    return (
        <NativeBaseProvider>
            <View style={styles.mainContainer}>
                <Text style={styles.mainTitle}>
                    Banco de Horas
                </Text>

                <View style={styles.creditPoolBoxView}>
                    <View style={styles.invariantContentView}>
                        <Select
                            placeholder="Tipo de atividade"
                            onValueChange={handleSetActivityKind}
                            selectedValue={activityMetrics ? activityMetrics.kind : ""}
                        >
                            {DBActMetricsInfo.map((activity, index) =>
                                <Select.Item key={index} label = {activity.kind} value={activity.kind} />
                            )}
                        </Select>
                        <ProgressBar progress={progress} height={20} />
                        <Text> {poolValue}/{poolLimit} horas até o próximo crédito</Text>
                    </View>
                </View>
            </View>
        </NativeBaseProvider>
    )
}

export default CreditPoolScreen;