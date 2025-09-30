import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from '../../../../projects/ui-kit/src/lib/atoms/ui-input/ui-input.component';
import { UiButtonComponent } from '../../../../projects/ui-kit/src/lib/atoms/ui-button/ui-button.component';
import { UiIconComponent } from '../../../../projects/ui-kit/src/lib/atoms/ui-icon/ui-icon.component';
import { UiBadgeComponent } from '../../../../projects/ui-kit/src/lib/atoms/ui-badge/ui-badge.component';

/**
 * PUBLIC_INTERFACE
 * DeviceInfoComponent renders the Device Information & Performance page using ui-kit atoms
 * and ui-tokens (emerald theme). Includes:
 * - Search bar with chips (IP/MAC) and search button
 * - Device metadata cards grid
 * - Performance cards column (Uptime, Temperature, CPU, Memory)
 * - Services grid and list with pagination buttons
 */
@Component({
  selector: 'app-device-info',
  standalone: true,
  imports: [CommonModule, UiInputComponent, UiButtonComponent, UiIconComponent, UiBadgeComponent],
  template: `
    <div class="wrapper page-bg">
      <div class="canvas" style="width:var(--canvas-width, 1200px); min-width: 1024px; margin: 0 auto; display:flex; gap: 24px;">
        <!-- Sidebar (placeholder for now per organisms) -->
        <aside class="sidebar" style="width: 256px; background: var(--color-ffffff); box-shadow: var(--shadow-3), var(--shadow-4);">
          <div class="sidebar-header" style="height:64px; background: var(--color-0d9488); display:flex; align-items:center; padding: 0 16px; gap: 12px;">
            <ui-icon name="router" [size]="30" color="var(--color-ffffff)"></ui-icon>
            <div style="color:#fff; font:700 20px/28px var(--font-family-inter, Inter, sans-serif);">Device Manager</div>
          </div>
          <nav class="sidebar-nav" style="padding: 8px 0;">
            <div class="nav-item" style="height:40px; display:flex; align-items:center; gap:12px; padding: 0 16px;">
              <ui-icon name="person"></ui-icon>
              <div style="font:400 16px/24px var(--font-family-inter); color:var(--color-374151);">Profile Management</div>
            </div>
            <div class="nav-item active" style="height:40px; display:flex; align-items:center; gap:12px; padding: 0 16px; background: var(--color-ccfbf1);">
              <ui-icon name="devices"></ui-icon>
              <div style="font:400 16px/24px var(--font-family-inter); color:var(--color-374151);">Device Management</div>
            </div>
          </nav>
        </aside>

        <!-- Main -->
        <main class="main-wrap" style="flex:1 1 auto; display:flex; flex-direction:column; min-height: 100vh;">
          <!-- Header -->
          <header class="header" style="height:60px; background: var(--color-ffffff); box-shadow: var(--shadow-1), var(--shadow-2); display:flex; align-items:center; justify-content:flex-end; padding: 0 24px; gap: 16px;">
            <div style="text-align:right;">
              <div style="font:600 14px/20px var(--font-family-inter); color: var(--color-1f2937);">John Doe</div>
              <div style="font:400 12px/16px var(--font-family-inter); color: var(--color-6b7280);">Administrator</div>
            </div>
            <a class="logout" href="javascript:void(0)" style="display:flex; align-items:center; gap:8px; color: var(--color-4b5563); text-decoration:none;">
              <ui-icon name="logout" color="var(--color-4b5563)" [size]="24"></ui-icon>
              <span style="font:500 14px/20px var(--font-family-inter); color: var(--color-4b5563);">Logout</span>
            </a>
          </header>

          <!-- Content -->
          <section class="main" style="flex:1 1 auto; padding: 24px; display:flex; flex-direction:column; gap:24px;">
            <!-- Search bar -->
            <div class="search-card" style="background:#fff; border-radius: var(--radius-8); box-shadow: var(--shadow-5), var(--shadow-6); min-height:70px; display:flex; align-items:center; gap:16px; padding: 16px;">
              <ui-input class="search-input" [placeholder]="'Search by IP or MAC'">
                <ui-icon prefix name="search" color="var(--color-6b7280)"></ui-icon>
              </ui-input>

              <div class="filter-group" style="display:flex; align-items:center; gap:20px;">
                <div class="filter-chip" style="display:flex; align-items:center; gap:8px;">
                  <span style="width:16px; height:16px; background: var(--color-0d9488); border-radius: var(--radius-16); display:inline-flex; align-items:center; justify-content:center;">
                    <span style="width:6px; height:6px; background: #fff; border-radius: 9999px;"></span>
                  </span>
                  <span style="font:500 14px/20px var(--font-family-inter); color: var(--color-374151);">IP</span>
                </div>
                <div class="filter-chip" style="display:flex; align-items:center; gap:8px;">
                  <span style="width:16px; height:16px; border:1px solid var(--color-d1d5db); border-radius: var(--radius-16);"></span>
                  <span style="font:500 14px/20px var(--font-family-inter); color: var(--color-374151);">MAC</span>
                </div>
              </div>

              <ui-button variant="primary" size="sm">Search</ui-button>
            </div>

            <!-- Device Information & Performance -->
            <div class="section-card" style="background:#fff; border-radius: var(--radius-8); box-shadow: var(--shadow-1), var(--shadow-2); overflow:hidden;">
              <div class="section-header" style="height:60px; display:flex; align-items:center; gap:12px; padding: 0 16px;">
                <ui-icon name="devices" [size]="24" color="var(--color-0d9488)"></ui-icon>
                <div style="font:600 20px/28px var(--font-family-inter); color: var(--color-374151);">Device Information & Performance</div>
                <span style="margin-left: auto;"></span>
              </div>

              <div class="device-meta" style="padding: 16px 24px 24px 24px;">
                <!-- Status row -->
                <div style="display:flex; align-items:center; gap: 12px; margin-bottom: 8px;">
                  <div style="font:600 18px/28px var(--font-family-inter); color: var(--color-374151);">Device Status:</div>
                  <ui-badge>ONLINE</ui-badge>
                </div>

                <!-- Metadata grid -->
                <div style="display:grid; grid-template-columns: repeat(3, minmax(0, 317px)); gap: 30px;">
                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Profile Name:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">Device vewb</div>
                  </div>
                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Manufacturer:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">ASUS</div>
                  </div>
                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">MAC Address:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">00:1A:2B:3C:4D:5E</div>
                  </div>

                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">IP Address:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">192.168.1.100</div>
                  </div>
                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Hardware Version:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">2.0</div>
                  </div>
                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Software Version:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">1.2.3</div>
                  </div>

                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Firmware Version:</div>
                    <div style="display:flex; align-items:center; gap:14px;">
                      <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">3.0.0.4.388.23285</div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <ui-icon name="update" [size]="16" color="var(--color-f97316)"></ui-icon>
                        <div style="color: var(--color-f97316); font:600 14px/20px var(--font-family-inter);">Update<br />Available</div>
                      </div>
                    </div>
                  </div>
                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Model Name:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">RT-AX88U</div>
                  </div>
                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Product Class:</div>
                    <div style="color: var(--color-0d9488); font:700 16px/24px var(--font-family-inter);">Router</div>
                  </div>

                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Serial Number:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">ABC123456789</div>
                  </div>
                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Last Firmware Upgrade:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">2024-01-15</div>
                  </div>
                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Additional H/W Version:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">Rev A</div>
                  </div>

                  <div class="meta-card" style="background: var(--color-f8fafc); border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); padding: 17px 18px;">
                    <div style="color: var(--color-64748b); font:400 14px/21px var(--font-family-inter); margin-bottom:4px;">Manufacturer OUI:</div>
                    <div style="color: var(--color-0f172a); font:500 16px/24px var(--font-family-inter);">00:1A:2B</div>
                  </div>
                </div>

                <!-- Right performance column -->
                <div style="display:grid; grid-template-columns: 1fr 480px; gap: 16px; margin-top: 16px;">
                  <div></div>
                  <div class="performance-col" style="display:flex; flex-direction:column; gap:16px;">
                    <div class="perf-card" style="background:#fff; border-radius: var(--radius-8); padding: 16px; box-shadow: var(--shadow-1), var(--shadow-2);">
                      <div style="display:flex; align-items:center; gap:12px;">
                        <ui-icon name="timer" color="var(--color-115e59)"></ui-icon>
                        <div style="color: var(--color-115e59); font:500 16px/24px var(--font-family-inter);">Uptime:</div>
                      </div>
                      <div style="color: var(--color-ef4444); font:700 20px/28px var(--font-family-inter); margin-top:8px;">7 days, 14 hours</div>
                    </div>

                    <div class="perf-card" style="background:#fff; border-radius: var(--radius-8); padding: 16px; box-shadow: var(--shadow-1), var(--shadow-2);">
                      <div style="display:flex; align-items:center; gap:12px;">
                        <ui-icon name="thermostat" color="var(--color-115e59)"></ui-icon>
                        <div style="color: var(--color-115e59); font:500 16px/24px var(--font-family-inter);">Temperature:</div>
                      </div>
                      <div style="display:flex; align-items:center; margin-top:8px;">
                        <div style="color: var(--color-1f2937); font:700 20px/28px var(--font-family-inter); margin-right:12px;">45°CS</div>
                        <div style="margin-left:12px; padding: 4px 12px; background: var(--color-14b8a6); color:#fff; border-radius: 9999px; font:700 12px/16px var(--font-family-inter); display:inline-block;">Normal</div>
                      </div>
                    </div>

                    <div class="perf-card" style="background:#fff; border-radius: var(--radius-8); padding: 16px; box-shadow: var(--shadow-1), var(--shadow-2);">
                      <div style="display:flex; align-items:center; gap:12px;">
                        <ui-icon name="memory" color="var(--color-115e59)"></ui-icon>
                        <div style="color: var(--color-115e59); font:500 16px/24px var(--font-family-inter);">CPU Utilization:</div>
                      </div>
                      <div style="display:flex; align-items:center; margin-top:8px; gap:12px;">
                        <div style="color: var(--color-1f2937); font:700 20px/28px var(--font-family-inter);">23%</div>
                        <div style="height:10px; flex:1; background: var(--color-e2e8f0); border-radius: 9999px; overflow:hidden;">
                          <div style="width: 23%; height: 10px; background: var(--color-db2777);"></div>
                        </div>
                      </div>
                    </div>

                    <div class="perf-card" style="background:#fff; border-radius: var(--radius-8); padding: 16px; box-shadow: var(--shadow-1), var(--shadow-2);">
                      <div style="display:flex; align-items:center; gap:12px;">
                        <ui-icon name="storage" color="var(--color-115e59)"></ui-icon>
                        <div style="color: var(--color-115e59); font:500 16px/24px var(--font-family-inter);">Memory Usage:</div>
                      </div>
                      <div style="display:flex; align-items:center; margin-top:8px;">
                        <div style="color: var(--color-1f2937); font:700 20px/28px var(--font-family-inter); margin-right:12px;">512%</div>
                        <div style="color: var(--color-4b5563); font:400 14px/20px var(--font-family-inter);">(512GB / 1024GB)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> <!-- /device-meta -->
            </div> <!-- /section-card -->

            <!-- Services -->
            <div class="services-card" style="background:#fff; border-radius: var(--radius-8); box-shadow: var(--shadow-1), var(--shadow-2);">
              <div class="services-header" style="height:60px; display:flex; align-items:center; gap:12px; padding: 0 16px;">
                <ui-icon name="route" [size]="24" color="var(--color-0d9488)"></ui-icon>
                <div style="font:600 20px/28px var(--font-family-inter); color: var(--color-374151);">Device Journeys & Services</div>
              </div>
              <div class="services-body" style="padding:24px;">
                <div class="service-grid" style="display:grid; grid-template-columns: repeat(4, 208px); gap:24px;">
                  <div class="service-card" style="width:192px; height:150px; border:1px solid var(--color-e5e7eb); border-radius: var(--radius-8); padding:16px;">
                    <div class="service-title" style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
                      <ui-icon name="wifi" [size]="30" color="var(--color-0d9488)"></ui-icon>
                      <div style="font:600 16px/24px var(--font-family-inter); color: var(--color-1f2937);">Wi-Fi</div>
                    </div>
                    <div style="color: var(--color-6b7280); font:400 14px/20px var(--font-family-inter); white-space: pre-line;">
                      Manage Wi-Fi settings,
guest networks, and
security.
                    </div>
                  </div>

                  <div class="service-card" style="width:192px; height:150px; border:1px solid var(--color-e5e7eb); border-radius: var(--radius-8); padding:16px;">
                    <div class="service-title" style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
                      <ui-icon name="family_restroom" [size]="30" color="var(--color-db2777)"></ui-icon>
                      <div style="font:600 16px/24px var(--font-family-inter); color: var(--color-1f2937);">Parental Controls</div>
                    </div>
                    <div style="color: var(--color-6b7280); font:400 14px/20px var(--font-family-inter); white-space: pre-line;">
                      Set content filters and
internet access
schedules.
                    </div>
                  </div>

                  <div class="service-card" style="width:192px; height:150px; border:1px solid var(--color-e5e7eb); border-radius: var(--radius-8); padding:16px;">
                    <div class="service-title" style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
                      <ui-icon name="network_check" [size]="30" color="var(--color-4f46e5)"></ui-icon>
                      <div style="font:600 16px/24px var(--font-family-inter); color: var(--color-1f2937);">QoS</div>
                    </div>
                    <div style="color: var(--color-6b7280); font:400 14px/20px var(--font-family-inter); white-space: pre-line;">
                      Prioritize traffic for
gaming, streaming or
work.
                    </div>
                  </div>

                  <div class="service-card" style="width:192px; height:150px; border:1px solid var(--color-e5e7eb); border-radius: var(--radius-8); padding:16px;">
                    <div class="service-title" style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
                      <ui-icon name="settings_ethernet" [size]="30" color="var(--color-4b5563)"></ui-icon>
                      <div style="font:600 16px/24px var(--font-family-inter); color: var(--color-1f2937);">LAN Settings</div>
                    </div>
                    <div style="color: var(--color-6b7280); font:400 14px/20px var(--font-family-inter); white-space: pre-line;">
                      Manage DHCP, IP
reservations, and static
routes.
                    </div>
                  </div>
                </div>

                <!-- Pagination -->
                <div class="pagination" style="display:flex; align-items:center; justify-content:space-between; padding:24px 0;">
                  <div class="page-btn" aria-label="Previous" style="width:40px; height:40px; border-radius: 9999px; background:#fff; display:flex; align-items:center; justify-content:center; box-shadow: var(--shadow-1), var(--shadow-2);">
                    <ui-icon name="chevron_left" color="var(--color-000000)"></ui-icon>
                  </div>
                  <div class="page-btn" aria-label="Next" style="width:40px; height:40px; border-radius: 9999px; background:#fff; display:flex; align-items:center; justify-content:center; box-shadow: var(--shadow-1), var(--shadow-2);">
                    <ui-icon name="chevron_right" color="var(--color-000000)"></ui-icon>
                  </div>
                </div>

                <!-- Services list -->
                <div class="services-list" style="border:1px solid var(--color-e2e8f0); border-radius: var(--radius-8); overflow:hidden;">
                  <div class="service-row" style="height:60px; display:flex; align-items:center; padding: 0 16px; border-bottom: 1px solid var(--color-e2e8f0);">
                    <div style="font:600 18px/28px var(--font-family-inter); color: var(--color-374151);">Wi-Fi Services</div>
                    <span style="margin-left:auto;"><ui-icon name="expand_more"></ui-icon></span>
                  </div>
                  <div class="service-row" style="height:60px; display:flex; align-items:center; padding: 0 16px; border-bottom: 1px solid var(--color-e2e8f0);">
                    <div style="font:600 18px/28px var(--font-family-inter); color: var(--color-374151);">Parental Controls Services</div>
                    <span style="margin-left:auto;"><ui-icon name="expand_more"></ui-icon></span>
                  </div>
                  <div class="service-row" style="height:60px; display:flex; align-items:center; padding: 0 16px; border-bottom: 1px solid var(--color-e2e8f0);">
                    <div style="font:600 18px/28px var(--font-family-inter); color: var(--color-374151);">QoS Services</div>
                    <span style="margin-left:auto;"><ui-icon name="expand_more"></ui-icon></span>
                  </div>
                  <div class="service-row" style="height:60px; display:flex; align-items:center; padding: 0 16px; border-bottom: 1px solid var(--color-e2e8f0);">
                    <div style="font:600 18px/28px var(--font-family-inter); color: var(--color-374151);">Security Services</div>
                    <span style="margin-left:auto;"><ui-icon name="expand_more"></ui-icon></span>
                  </div>
                  <div class="service-row" style="height:60px; display:flex; align-items:center; padding: 0 16px;">
                    <div style="font:600 18px/28px var(--font-family-inter); color: var(--color-374151);">LAN Settings Services</div>
                    <span style="margin-left:auto;"><ui-icon name="expand_more"></ui-icon></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceInfoComponent {}
