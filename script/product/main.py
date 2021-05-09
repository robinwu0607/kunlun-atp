from libs import lib

import time

log = lib.get_event_logger()


def main_sequencer():
    log.debug("welcome to main sequencer")
    # promp a question to operator to ask serial number
    serial = lib.ask_question("请输入序列号SERIAL：", timeout=60 * 3)
    log.debug(serial)  # echo serial to EVENT window.
    lib.set_display1("SERIAL:{}".format(serial))
    uuttype = lib.ask_question("请选择UUTTYPE：", options=["PRODUCT", "DEVELOP"], timeout=60 * 3)
    log.debug(uuttype)  # echo uuttype to EVENT window.
    lib.set_display2("UUTTYPE:{}".format(uuttype))
    lib.set_display3("STEP: CPU Test")
    # add a test record to database.
    lib.add_test_data(sernum=serial, uuttype=uuttype, area="FT")
    # get a dummy connection
    uut = lib.get_uut(protocol="DUMMY")
    uut.open()  # open the connection
    # send a cmd "dir" to connection, expect to get ">" within 10s
    uut.send("dir\r", expect=">", timeout=10)
    log.debug(uut.buf)  # echo what connection feedback to EVENT window.
    time.sleep(2)  # wait 2s
    uut.close()  # close the connection.
    return
