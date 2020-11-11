import React from 'react'
import { useLanguage } from '@/language/useLanguage'
import { DeviceProps } from '@/types/common'
import { Utils } from '@/utils'

type deviceColumnsProps = {
    onCheckDevice: (device: DeviceProps) => void
}

export const deviceColumns = (events: deviceColumnsProps) => {
    return [
        {
            title: useLanguage.sn,
            dataIndex: 'nickname',
            render(name: number, record: DeviceProps) {
                return (
                    <span className="awe-action-item" onClick={() => events.onCheckDevice(record)}>
                        {name}
                    </span>
                )
            },
        },
        {
            title: useLanguage.device_type,
            dataIndex: 'device_type',
        },
        {
            title: useLanguage.latest_gprs_time,
            dataIndex: 'updated_at',
            width: 190,
            render(updated_at: string): any {
                return Utils.utc2Time(updated_at)
            },
        },
        {
            title: useLanguage.battery_power,
            dataIndex: 'battery',
        },
        {
            title: useLanguage.temperature,
            dataIndex: 'temperature',
        },
        {
            title: useLanguage.belong_pasture,
            dataIndex: 'pasture',
        },
    ]
}