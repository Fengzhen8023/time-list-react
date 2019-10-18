import React from 'react';
import 'antd/dist/antd.css'
import './RecordContent.scss';
import { Tabs } from 'antd';
import 'css/modifyAntdTab.css'
const { TabPane } = Tabs;

class RecordContent extends React.Component {
    render() {
        return (
            <div className="record-content">
                <Tabs>
                    <TabPane tab="按分类" key="1">
                        按分类
                    </TabPane>
                    <TabPane tab="按时间" key="2">
                        按时间
                    </TabPane>
                    <TabPane tab="按重要程度" key="3">
                        按重要程度
                    </TabPane>
                    <TabPane tab="按完成情况" key="4">
                        按完成情况
                    </TabPane>
                    <TabPane tab="按重复类型" key="5">
                        按重复类型
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default RecordContent;