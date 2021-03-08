import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Truncator } from "./Truncator";
import { Input, Layout, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";

function App() {
  const [text, setText] = useState("");

  return (
    <Layout className="fill">
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Truncator</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            padding: 8,
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              padding: 8,
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <div style={{ marginBottom: 8 }}>INPUT</div>
            <Input.TextArea
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
              style={{
                resize: "none",
                width: "100%",
                height: "95%",
              }}
            />
          </div>
          <div style={{ width: "50%", height: "50%", padding: 8 }}>
            <div>
              <div style={{ marginBottom: 8 }}>OUTPUT</div>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>Original</div>
                <div style={{ flex: 0.75 }}>8</div>
                <div style={{ flex: 0.5 }}>4</div>
              </div>
              {text
                .split(/\r?\n/)
                .filter((x) => x.trim().length > 0)
                .map((t) => (
                  <Truncator text={t} />
                ))}
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
